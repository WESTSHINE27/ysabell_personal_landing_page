import React from "react";
import HoverIcon from "../assets/components/HoverIcon";
import LandingPic from "../assets/test_resoource/test_title_pic.jpg";
import PersonalIntroductionPic from "../assets/test_resoource/test_personal_introduction2-removebg-preview.png";

import InstagramIcon from "../assets/icons/instagram-lineicon.svg";
import InstagramIconHover from "../assets/icons/instagram-icon.svg";
import TikTokIcon from "../assets/icons/tiktok-lineicon.svg";
import TikTokIconHover from "../assets/icons/tiktok-icon.svg";
import YoutubeIcon from "../assets/icons/youtube-lineicon.svg";
import YoutubeIconHover from "../assets/icons/youtube-icon.svg";
import EmailIcon from "../assets/icons/email-lineicon.svg";
import EmailIconHover from "../assets/icons/email-icon.svg";

export const Home = () => {
  return (
    <div className='snap-y snap-mandatory overflow-y-scroll h-screen w-screen bg-gray-900"'>
      {/*
       first view
      */}
      <div
        className="snap-center h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${LandingPic})` }}
      >
        <div className="h-full justify-center items-center flex">
          <div className="w-fit">
            <p className="font-julius text-9xl text-white drop-shadow-lg">
              Ysabell Tan
            </p>
            <div className="flex w-full justify-between p-4">
              <HoverIcon
                defaultIcon={InstagramIcon}
                hoverIcon={InstagramIconHover}
                alt="Instagram Icon"
                href="https://www.instagram.com/"
                size={100}
              />
              <HoverIcon
                defaultIcon={TikTokIcon}
                hoverIcon={TikTokIconHover}
                alt="Tiktok Icon"
                href="https://www.instagram.com/"
                size={100}
              />
              <HoverIcon
                defaultIcon={YoutubeIcon}
                hoverIcon={YoutubeIconHover}
                alt="Youtube Icon"
                href="https://www.instagram.com/"
                size={100}
              />
              <HoverIcon
                defaultIcon={EmailIcon}
                hoverIcon={EmailIconHover}
                alt="Email Icon"
                href="https://www.instagram.com/"
                size={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/*
       second view
      */}
      <div className="snap-center h-screen w-full flex">
        <div className="flex-1/2 justify-center items-end flex pb-8">
          <img src={PersonalIntroductionPic} className="h-9/10"/>
        </div>
        <div className="flex-1/2 bg-amber-50">

        </div>
      </div>
    </div>
  );
};

export default Home;
