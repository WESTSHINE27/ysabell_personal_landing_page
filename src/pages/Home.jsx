import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import LandingSection from "../assets/components/LandingSection";
import ImagesAutoScrollerSection from "../assets/components/ImagesAutoScrollerSection";
import MusicPlayerSection from "../assets/components/MusicPlayerSection";
import CollaborationSection from "../assets/components/CollaborationSection";
import FashionWeekSection from "../assets/components/FashionWeekSection";
import PersonalIntroductionPic from "../assets/test_resoource/test_personal_introduction2-removebg-preview.png";
import VougeDesktopSection from "../assets/components/VougeDesktopSection";
import HorizontalTest from "../assets/components/HorizontalTest";

export const Home = () => {
  const introSectionRef = useRef(null);
  const isIntroInView = useInView(introSectionRef, { once: false });

  return (
    <div>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen bg-white scrollbar-none">
        <LandingSection />
        <div className="relative">
          <div className="snap-start h-[100dvh] w-full flex flex-col md:flex-row sticky top-0 z-0">
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
                  clipPath: isIntroInView
                    ? "inset(0 0% 0 0)"
                    : "inset(0 100% 0 0)",
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
          <div className="hidden md:block relative snap-start h-[100dvh] w-full pt-6">
            <VougeDesktopSection />
          </div>
        </div>
        <FashionWeekSection />

        <MusicPlayerSection />
        <CollaborationSection />
        <ImagesAutoScrollerSection />
      </div>
    </div>
  );
};

export default Home;
