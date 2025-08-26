import React from "react";

import HoverIcon from "../../assets/components/HoverIcon";

import LandingPic from "../../assets/test_resoource/landing-pic.png";

import InstagramIcon from "../../assets/icons/instagram-lineicon.svg";
import InstagramIconHover from "../../assets/icons/instagram-icon.svg";
import TikTokIcon from "../../assets/icons/tiktok-lineicon.svg";
import TikTokIconHover from "../../assets/icons/tiktok-icon.svg";
import YoutubeIcon from "../../assets/icons/youtube-lineicon.svg";
import YoutubeIconHover from "../../assets/icons/youtube-icon.svg";
import EmailIcon from "../../assets/icons/email-lineicon.svg";
import EmailIconHover from "../../assets/icons/email-icon.svg";

const LandingSection = () => {
  return (
    <div
      className="snap-start h-[100dvh] w-full bg-cover bg-[center_top]"
      style={{ backgroundImage: `url(${LandingPic})` }}
    >
      <div className="h-full justify-center items-center flex">
        <div className="w-fit">
          <p className="font-julius text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-lg text-center">
            Ysabell Tan
          </p>
          <div className="flex w-full justify-between p-4">
            <HoverIcon
              defaultIcon={InstagramIcon}
              hoverIcon={InstagramIconHover}
              alt="Instagram Icon"
              href="https://www.instagram.com/ysabell_tan?igsh=MXQ5OXh2Nzk5bThvaA=="
            />
            <HoverIcon
              defaultIcon={TikTokIcon}
              hoverIcon={TikTokIconHover}
              alt="Tiktok Icon"
              href="https://v.douyin.com/m5WCHpJLRtQ/"
            />
            <HoverIcon
              defaultIcon={YoutubeIcon}
              hoverIcon={YoutubeIconHover}
              alt="Youtube Icon"
              href="https://www.youtube.com/@cays_media"
            />
            <HoverIcon
              defaultIcon={EmailIcon}
              hoverIcon={EmailIconHover}
              alt="Email Icon"
              href="https://www.instagram.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
