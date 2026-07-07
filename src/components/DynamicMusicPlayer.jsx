import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  useCallback,
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
  const playerSeekRef = useRef(null); // ref to player's function to set time

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
  const maybeScrollToSection = useCallback((currentTime) => {
    const sectionsArray = Object.values(sections.current);
    if (sectionsArray.length === 0) return;

    const matchedSection = sectionsArray
      .sort((a, b) => b.time - a.time)
      .find((section) => currentTime >= section.time);

    if (matchedSection) {
      setActiveSectionTitle((prevTitle) => {
        // Skip if we are already in this highlighted block
        if (prevTitle === matchedSection.title) return prevTitle;

        // avoid window.scrollIntoView, it struggles with some layout stuff
        if (matchedSection.elementRef.current) {
          const element = matchedSection.elementRef.current;
          const absoluteElementTop =
            element.getBoundingClientRect().top + window.scrollY;
          const safetyOffset = 20;

          window.scrollTo({
            top: absoluteElementTop - safetyOffset,
            behavior: "smooth",
          });
        }
        return matchedSection.title;
      });
    }
  }, []);

  return (
    <DynamicMusicContext.Provider
      value={{
        activeSectionTitle, // title of the currently playing section
        registerSection, // call to register a section
        unregisterSection, // call to unregister a section
        maybeScrollToSection, // called by player when updating time so context knows when to scroll
        playerSeekRef, // music player will set this to a function to jump to a time
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
  const { maybeScrollToSection, playerSeekRef } = useDynamicMusicContext();

  // Used to stop forcing audio jumps while scrubbing
  // Helps performance
  const isScrubbingRef = useRef(false);

  const jumpToTime = (seconds) => {
    audioRef.current.currentTime = seconds;
    setCurrentTime(seconds);
    if (maybeScrollToSection) {
      maybeScrollToSection(seconds);
    }
  };

  useEffect(() => {
    if (playerSeekRef) playerSeekRef.current = jumpToTime;
    return () => {
      if (playerSeekRef) playerSeekRef.current = null;
    };
  }, [playerSeekRef]);

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
    if (isScrubbingRef.current) return;
    const time = audioRef.current.currentTime;
    setCurrentTime(time);
    if (maybeScrollToSection) {
      maybeScrollToSection(time);
    }
  };

  // handler for scrolling
  const handleProgressChange = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    jumpToTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleScrubStart = () => {
    isScrubbingRef.current = true;
    audioRef.current.pause();
  };
  const handleScrubEnd = () => {
    isScrubbingRef.current = false;
    // Synchronize media player to final slider coordinates once
    audioRef.current.currentTime = currentTime;
    if (maybeScrollToSection) {
      maybeScrollToSection(currentTime);
    }
    if (isPlaying)
      audioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
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
          onMouseDown={handleScrubStart}
          onMouseUp={handleScrubEnd}
          onTouchStart={handleScrubStart}
          onTouchEnd={handleScrubEnd}
        />
        <span className={styles.playerTimeLabel}>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export const DynamicMusicSection = ({ title, time, children }) => {
  const cardRef = useRef(null);
  const {
    activeSectionTitle,
    registerSection,
    unregisterSection,
    playerSeekRef,
  } = useDynamicMusicContext();

  const isHighlighted = activeSectionTitle === title;
  const timeInSeconds = convertToSeconds(time);

  const handleJumpClick = () => {
    playerSeekRef.current(timeInSeconds);
  };

  useEffect(() => {
    // Register DOM ref dynamically with the DynamicMusicProvider
    registerSection(title, timeInSeconds, cardRef);

    // Unregister if component disappears from layout tree
    return () => unregisterSection(title);
  }, [title, timeInSeconds, registerSection, unregisterSection]);

  return (
    <div
      ref={cardRef}
      className={`${styles.contentSectionCard} ${isHighlighted ? styles.isHighlighted : ""}`}
    >
      <h3>
        {title} ({normalizeTimestampRemoveMicros(time)})
        <button onClick={handleJumpClick} className={styles.jumpToTimeBtn}>
          ⏭ Jump to Section
        </button>
      </h3>

      {children}
    </div>
  );
};
