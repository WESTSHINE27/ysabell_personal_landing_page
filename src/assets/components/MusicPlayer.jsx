import React, { useState, useRef, useEffect } from "react";
import CoverMusic from "../music/cover-music.mp3";
import CoverPic from "../test_resoource/cover.png";
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
    <div className="p-4 flex flex-col w-56 md:w-64 lg:w-76">
      {/* Time display above progress bar */}

      {/* Progress Bar */}
      <img className="pb-4" src={CoverPic}></img>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleProgressChange}
        style={{
          "--progress": `${(currentTime / duration) * 100}%`,
        }}
        className="mb-1"
      />

      <div className="flex justify-between text-sm text-white pb-2">
        <span>{formatTime(currentTime)}</span>
        <span>-{formatTime(duration - currentTime)}</span>
      </div>

      {/* Play / Pause Button */}
      <div className="flex gap-1">
        <button
          onClick={togglePlay}
          className=" rounded-lg flex items-center justify-center bg-white text-[#765848] w-16 h-12 cursor-pointer"
        >
          <img
            src={isPlaying ? PauseIcon : PlayIcon}
            alt={isPlaying ? "Pause" : "Play"}
            className="w-6 h-6"
          />
        </button>

        <a
          href="https://www.youtube.com/watch?v=WCixcuONOWo"
          target="_blank"
          className="block w-full"
        >
          <button className=" bg-white text-[#765848] rounded-lg w-full h-12 cursor-pointer">
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
