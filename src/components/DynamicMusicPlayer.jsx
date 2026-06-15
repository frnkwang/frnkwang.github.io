import { useState, useRef, useEffect } from "react";

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

export function DynamicMusicPlayer({ src, seekToTime }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Listen for external scroll-based seek instructions from the Parent Page
  useEffect(() => {
    if (seekToTime !== null && audioRef.current) {
      const seekTimeSec = convertToSeconds(seekToTime);
      audioRef.current.currentTime = seekTimeSec;
      setCurrentTime(seekTimeSec);
    }
  }, [seekToTime]);

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
  const onTimeUpdate = () => setCurrentTime(audioRef.current.currentTime);

  const handleProgressChange = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
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
        <span className={styles.playerTimeLabel}>
          {formatTime(currentTime)}
        </span>
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

export function DynamicMusicSection({
  sectionTitle,
  targetTime,
  currentTargetTime,
  onTriggerSeek,
  children,
}) {
  const sectionRef = useRef(null);
  const isHighlighted = currentTargetTime === targetTime;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onTriggerSeek(targetTime);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [targetTime, onTriggerSeek]);

  return (
    <div
      ref={sectionRef}
      className={`${styles.contentSectionCard} ${isHighlighted ? styles.isHighlighted : ""}`}
    >
      <h3>
        {sectionTitle} ({normalizeTimestampRemoveMicros(targetTime)})
      </h3>
      {children}
    </div>
  );
}
