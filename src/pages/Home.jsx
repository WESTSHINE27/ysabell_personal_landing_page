import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import HoverIcon from "../assets/components/HoverIcon";
import ImageAutoScroller from "../assets/components/ImageAutoScroller";

import CoverSection from "../assets/components/CoverSection";

import LandingPic from "../assets/test_resoource/test_title_pic.jpg";
import PersonalIntroductionPic from "../assets/test_resoource/test_personal_introduction2-removebg-preview.png";
import PersonalPicForCarousell_1 from "../assets/test_resoource/test_portrail1.jpg";
import PersonalPicForCarousell_2 from "../assets/test_resoource/test_portrail2.jpg";
import PersonalPicForCarousell_4 from "../assets/test_resoource/test_portrail4.jpg";
import PersonalPicForCarousell_5 from "../assets/test_resoource/test_portrail5.jpg";
import PersonalPicForCarousell_6 from "../assets/test_resoource/test_portrail6.jpg";
import PersonalPicForCarousell_7 from "../assets/test_resoource/test_portrail7.jpg";
import PersonalPicForCarousell_8 from "../assets/test_resoource/test_portrail8.jpg";

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
  const images = [
    PersonalPicForCarousell_1,
    PersonalPicForCarousell_2,
    PersonalPicForCarousell_4,
    PersonalPicForCarousell_5,
    PersonalPicForCarousell_6,
    PersonalPicForCarousell_7,
    PersonalPicForCarousell_8,
  ];/*  */
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen bg-white scrollbar-none">
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
                href="https://www.instagram.com/ysabell_tan?igsh=MXQ5OXh2Nzk5bThvaA=="
                size={100}
              />
              <HoverIcon
                defaultIcon={TikTokIcon}
                hoverIcon={TikTokIconHover}
                alt="Tiktok Icon"
                href="https://v.douyin.com/m5WCHpJLRtQ/"
                size={100}
              />
              <HoverIcon
                defaultIcon={YoutubeIcon}
                hoverIcon={YoutubeIconHover}
                alt="Youtube Icon"
                href="https://www.youtube.com/@cays_media"
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
      <div className="snap-center h-screen w-full flex p-8">
        <div className="flex-1/2 justify-center items-end flex">
          <img src={PersonalIntroductionPic} className="h-9/10" />
        </div>
        <div className="flex-1/2 justify-start items-center flex p-16">
          <motion.div
            initial={{ height: 0 }}
            animate={isIntroInView ? { height: "80%" } : { height: 0 }}
            transition={{ duration: 2 }}
            className="w-1.5 mr-6 bg-black"
          />
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
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-black shadow-lg"
          >
            <p className="text-4xl font-bold mb-1">Ysabell Tan</p>
            <p className="text-2xl mb-6">Influencer</p>
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
          </motion.div>
        </div>
      </div>

      <CoverSection />

      {/* personal picture auto scroller section  */}
      <div className="snap-center h-screen w-full flex flex-col">
        <div className="h-1/2">
          <ImageAutoScroller images={images} direction="right" />
        </div>
        <div className="h-1/2">
          <ImageAutoScroller images={images} direction="left" />
        </div>
      </div>
    </div>
  );
};

export default Home;
