import React, { useState, useRef, useEffect } from "react";
import CoverMusic from "../music/cover-music.mp3";
import Cover_Pic from "../imgs/cover-pic.webp";
import Cover_Pic_2560 from "../imgs/cover-pic-2560.webp";
import Cover_Pic_1600 from "../imgs/cover-pic-1600.webp";
import Cover_Pic_800 from "../imgs/cover-pic-800.webp";
import Cover_Pic_400 from "../imgs/cover-pic-400.webp";
import PlayIcon from "../icons/coco-play-icon.png";
import PauseIcon from "../icons/coco-pause-icon.png";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Format time into mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Update current time and duration
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  // Play / Pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Seek when user changes progress bar
  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="flex w-56 flex-col p-4 sm:w-64 md:w-72 lg:w-80 xl:w-88 2xl:w-88">
      {/* Time display above progress bar */}

      {/* Progress Bar */}
      <img
        className="pb-4"
        src={Cover_Pic}
        loading="lazy"
        srcSet={`
          ${Cover_Pic_400} 400w,
          ${Cover_Pic_800} 800w,
          ${Cover_Pic_1600} 1600w,
          ${Cover_Pic_2560} 2560w,
          ${Cover_Pic} 4160w
        `}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleProgressChange}
        style={{
          "--progress": `${(currentTime / duration) * 100}%`,
        }}
        className="mb-1 cursor-pointer"
      />

      <div className="flex justify-between pb-2 text-sm text-white lg:text-base">
        <span>{formatTime(currentTime)}</span>
        <span>-{formatTime(duration - currentTime)}</span>
      </div>

      {/* Play / Pause Button */}
      <div className="flex gap-1 sm:gap-2">
        <button
          onClick={togglePlay}
          className="flex h-11 w-15 cursor-pointer items-center justify-center rounded-lg bg-white text-[#765848] sm:h-12 sm:w-16 md:h-13 md:w-18 lg:h-14 lg:w-20"
        >
          <img
            src={isPlaying ? PauseIcon : PlayIcon}
            alt={isPlaying ? "Pause" : "Play"}
            className="h-6 w-6"
          />
        </button>

        <a
          href="https://www.youtube.com/watch?v=WCixcuONOWo"
          target="_blank"
          className="block w-full"
        >
          <button className="sm-mob:text-base h-11 w-full cursor-pointer rounded-lg bg-white text-sm text-[#765848] sm:h-12 sm:text-base md:h-13 md:text-lg lg:h-14 lg:text-xl">
            Play on Youtube
          </button>
        </a>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={CoverMusic} />
    </div>
  );
};

export default MusicPlayer;
