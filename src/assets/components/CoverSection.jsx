import React, { useRef, useState } from "react";
import CoverVideo from "../../assets/test_resoource/cover.mp4";
import YoutubeIcon from "../../assets/icons/youtube-lineicon.svg";
import YoutubeIconHover from "../../assets/icons/youtube-icon.svg";
import AudioIcon from "../../assets/icons/audio-icon.png";
import AudioMuteIcon from "../../assets/icons/audio-mute-icon.png";

const CoverSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      if (!newMuted) {
        videoRef.current.volume = 1;
      }
      setIsMuted(newMuted);
    }
  };

  return (
    <div className="snap-start overflow-hidden h-[100dvh] w-full relative">
      <video
        ref={videoRef}
        src={CoverVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      <div
        className="absolute left-10 bottom-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="https://www.youtube.com/watch?v=WCixcuONOWo" target="_blank">
          <img
            src={isHovered ? YoutubeIconHover : YoutubeIcon}
            className="w-24 cursor-pointer"
            alt="YouTube Icon"
          />
        </a>
      </div>

      <div className="absolute top-0 right-0 p-16 pr-50 h-full w-1/2 bg-black/42 flex flex-col items-start justify-center text-white">
        <p className="text-4xl font-bold mb-6">
          翻唱Cover《爱，存在（原唱：魏奇奇）
        </p>
        <p className="text-justify">
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
          description... description... description... description...
        </p>
        <img
          onClick={toggleMute}
          src={isMuted ? AudioMuteIcon : AudioIcon}
          alt="Audio Toggle"
          className="cursor-pointer w-16 absolute right-10 bottom-8"
        />
      </div>
    </div>
  );
};

export default CoverSection;
