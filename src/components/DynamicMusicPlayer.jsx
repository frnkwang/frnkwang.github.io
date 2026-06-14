import { useState, useRef, useEffect } from "react";

import styles from "./DynamicMusicPlayer.module.css";

export function DynamicMusicPlayer({ src, audioTitle }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((error) => console.log("Playback interrupted:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleProgressChange = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    const audioEl = audioRef.current;
    const handleEnded = () => setIsPlaying(false);

    audioEl.addEventListener("ended", handleEnded);
    return () => audioEl.removeEventListener("ended", handleEnded);
  }, []);

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

export function DynamicMusicBenchmark({ player }) {
  return <div></div>;
}
