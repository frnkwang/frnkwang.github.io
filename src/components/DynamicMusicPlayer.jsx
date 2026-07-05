import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  act,
} from "react";

import styles from "./DynamicMusicPlayer.module.css";

// MM:SS.ffffff is the public-facing timestamp format for these components
// It uses seconds internally

function convertToSeconds(timeString) {
  // convert MM:SS.ffffff to seconds
  const parts = timeString.split(":");
  if (parts.length !== 2) {
    throw new Error("Invalid format. Expected mm:ss.ffffff");
  }
  const minutes = parseInt(parts[0], 10);
  const secondsWithFraction = parseFloat(parts[1]);
  return minutes * 60 + secondsWithFraction;
}

function convertToTimestampFormat(totalSeconds) {
  if (totalSeconds < 0 || isNaN(totalSeconds)) {
    throw new Error("Invalid input. Expected a non-negative number.");
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = seconds.toFixed(6).padStart(9, "0"); // 9 accounts for "ss.ffffff"

  return `${mm}:${ss}`;
}

function normalizeTimestamp(timeString) {
  return convertToTimestampFormat(convertToSeconds(timeString));
}
function normalizeTimestampRemoveMicros(timeString) {
  return normalizeTimestamp(timeString).substring(0, 5);
}

const DynamicMusicContext = createContext();

export const useDynamicMusicContext = () => useContext(DynamicMusicContext);

export const DynamicMusicProvider = ({ children }) => {
  const [activeSectionTitle, setActiveSectionTitle] = useState(null);

  // title: {title, time, ref}
  const sections = useRef({});
  const registerSection = (title, time, elementRef) => {
    if (Object.hasOwn(sections.current, title)) {
      throw new Error(`Duplicate section title: ${title}`);
    }
    sections.current[title] = { title, time, elementRef };
  };
  const unregisterSection = (title) => {
    delete sections.current[title];
  };

  // Triggered by DynamicMusicPlayer
  const updatePlaybackTime = (currentTime) => {
    const sectionsArray = Object.values(sections.current);
    // sort and find
    const section = sectionsArray
      .sort((a, b) => b.time - a.time)
      .find((section) => currentTime >= section.time);

    if (section && activeSectionTitle !== section.title) {
      setActiveSectionTitle(section.title);

      // jump to the section, if present.
      // Avoiding window.scrollIntoView because it struggles with other layout stuff
      const elementRect = section.elementRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const safetyOffset = 20; // 20 pixels of breathing room
      window.scrollTo({
        top: absoluteElementTop - safetyOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <DynamicMusicContext.Provider
      value={{
        activeSectionTitle,
        registerSection,
        unregisterSection,
        updatePlaybackTime,
      }}
    >
      {children}
    </DynamicMusicContext.Provider>
  );
};

export function DynamicMusicPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { updatePlaybackTime } = useDynamicMusicContext();

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Playback failed:", error));
    }
  };

  const onLoadedMetadata = () => setDuration(audioRef.current.duration);
  const onTimeUpdate = () => {
    const time = audioRef.current.currentTime;
    setCurrentTime(time);
    if (updatePlaybackTime) {
      updatePlaybackTime(time);
    }
  };

  // handler for scrolling
  const handleProgressChange = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    if (updatePlaybackTime) {
      updatePlaybackTime(newTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={styles.floatingPlayerContainer}>
      <audio
        ref={audioRef}
        src={src}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
      />
      <button onClick={togglePlayPause} className={styles.playerControlBtn}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
      <div className={styles.playerSliderContainer}>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className={styles.playerSlider}
        />
        <span className={styles.playerTimeLabel}>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export const DynamicMusicSection = ({ title, time, children }) => {
  const cardRef = useRef(null);
  const { activeSectionTitle, registerSection, unregisterSection } =
    useDynamicMusicContext();

  const isHighlighted = activeSectionTitle === title;

  useEffect(() => {
    // Register DOM ref dynamically with the DynamicMusicProvider
    registerSection(title, convertToSeconds(time), cardRef);

    // Unregister if component disappears from layout tree
    return () => unregisterSection(title);
  }, [title, time]);

  return (
    <div
      ref={cardRef}
      className={`${styles.contentSectionCard} ${isHighlighted ? styles.isHighlighted : ""}`}
    >
      <h3>
        {title} ({normalizeTimestampRemoveMicros(time)})
      </h3>
      {children}
    </div>
  );
};
