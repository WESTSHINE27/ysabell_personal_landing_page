import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import HoverIcon from "../assets/components/HoverIcon";
import CoverSection from "../assets/components/CoverSection";
import ImagesAutoScrollerSection from "../assets/components/ImagesAutoScrollerSection";
import MusicPlayer from "../assets/components/MusicPlayer";
import LandingPic from "../assets/test_resoource/landing-pic.png";
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
  const introSectionRef = useRef(null);
  const isIntroInView = useInView(introSectionRef, { once: false });

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen bg-white scrollbar-none">
      {/*
       first view
      */}
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

      <div className="snap-start h-[100dvh] w-full flex flex-col md:flex-row">
        {/* Image section */}
        <div className="flex justify-center items-center h-1/2 md:h-full md:w-1/2 p-4">
          <img
            src={PersonalIntroductionPic}
            alt="Personal"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Line separator */}
        {/* Horizontal for mobile */}
        <motion.div
          initial={{ width: 0 }}
          animate={isIntroInView ? { width: "90%" } : { width: 0 }}
          transition={{ duration: 1 }}
          className="block md:hidden h-0.5 bg-black mx-auto"
        />
        {/* Vertical for desktop */}
        <div className="hidden md:flex items-center">
          <motion.div
            initial={{ height: 0 }}
            animate={isIntroInView ? { height: "80%" } : { height: 0 }}
            transition={{ duration: 2 }}
            className="w-1 bg-black"
          />
        </div>

        {/* Text section */}
        <div className="flex justify-start items-start md:items-center h-1/2 md:h-full md:w-1/2 pt-4 pr-8 pl-8 md:p-8">
          <motion.div
            ref={introSectionRef}
            initial={{
              clipPath: "inset(0 100% 0 0)",
              opacity: 0,
            }}
            animate={{
              clipPath: isIntroInView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              opacity: isIntroInView ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-black shadow-lg max-w-xl"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold md:mb-1">
              Ysabell Tan
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-1 md:mb-6">
              Influencer
            </p>
            <p className="text-justify text-sm sm:text-base">
              description... description... description... description...
              description... description... description... description...
            </p>
          </motion.div>
        </div>
      </div>

      <div className="snap-start h-[100dvh] w-full flex justify-center items-center bg-[#765848] flex-col md:flex-row ">
        <div className="flex items-end justify-center md:items-center h-3/5 md:h-full w-full md:w-1/2 pb-4 md:pb-0">
          <MusicPlayer />
        </div>
        <div className="flex h-2/5 md:h-full w-full md:w-1/2 flex-col items-center md:items-start md:justify-center text-white pt-6 pb-6 pl-8 pr-8 md:p-12 lg:p-16">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold md:mb-1 text-center">
            About Me
          </p>
          <p className="text-center md:text-justify text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            elusmod tempor incididuntt labore et lolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
      </div>

      <CoverSection />
      <ImagesAutoScrollerSection />
    </div>
  );
};

export default Home;
