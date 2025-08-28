import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import StreetDesktopSection from "./StreetDesktopSection";
import FashionWeekGallerySection from "./FashionWeekGallerySection";
import TwoColumnImageSection from "./TwoColumnImageSection";

import Pic_1_1 from "../imgs/fashion-week-pic-1-1.webp";
import Pic_1_2 from "../imgs/fashion-week-pic-1-2.webp";
import Pic_1_3 from "../imgs/fashion-week-pic-1-3.webp";

import Pic_5_1 from "../imgs/fashion-week-pic-5-1.webp";
import Pic_5_1_400 from "../imgs/fashion-week-pic-5-1-400.webp";
import Pic_5_1_800 from "../imgs/fashion-week-pic-5-1-800.webp";
import Pic_5_1_1600 from "../imgs/fashion-week-pic-5-1-1600.webp";

import Pic_5_2 from "../imgs/fashion-week-pic-5-2.webp";
import Pic_5_2_400 from "../imgs/fashion-week-pic-5-2-400.webp";
import Pic_5_2_800 from "../imgs/fashion-week-pic-5-2-800.webp";
import Pic_5_2_1600 from "../imgs/fashion-week-pic-5-2-1600.webp";

import Pic_5_3 from "../imgs/fashion-week-pic-5-3.webp";
import Pic_5_3_400 from "../imgs/fashion-week-pic-5-3-400.webp";
import Pic_5_3_800 from "../imgs/fashion-week-pic-5-3-800.webp";
import Pic_5_3_1600 from "../imgs/fashion-week-pic-5-3-1600.webp";

import Pic_5_4 from "../imgs/fashion-week-pic-5-4.webp";
import Pic_5_4_400 from "../imgs/fashion-week-pic-5-4-400.webp";
import Pic_5_4_800 from "../imgs/fashion-week-pic-5-4-800.webp";
import Pic_5_4_1600 from "../imgs/fashion-week-pic-5-4-1600.webp";

import Fw2Pic from "../../assets/test_resoource/fw-2.jpg";

const FashionWeekDesktopView = () => {
  const fashionWeekDesktopPageRef2 = useRef(null);
  const isFashionWeekDesktopPageInView2 = useInView(
    fashionWeekDesktopPageRef2,
    {
      once: false,
    },
  );
  return (
    <div className="hidden md:block">
      <div className="relative flex h-[100dvh] w-full snap-start gap-12 bg-black p-12 text-white">
        <TwoColumnImageSection
          leftImage={Pic_1_2}
          rightImage={Pic_1_3}
          altLeft="pic"
          altRight="pic"
        />
      </div>

      <div className="relative flex h-[100dvh] w-full snap-start bg-black p-12 text-white">
        <StreetDesktopSection />
      </div>

      <div className="relative flex h-[100dvh] w-full snap-start bg-black p-12 text-white">
        <FashionWeekGallerySection />
      </div>

      <div className="relative flex h-[100dvh] w-full snap-start gap-12 bg-black p-12 text-white">
        <TwoColumnImageSection
          leftImage={Pic_1_2}
          rightImage={Pic_1_3}
          altLeft="pic"
          altRight="pic"
        />
      </div>

      <motion.div
        ref={fashionWeekDesktopPageRef2}
        className="relative flex h-[100dvh] w-full snap-start gap-6 bg-black p-12 text-white"
        initial="hidden"
        animate={isFashionWeekDesktopPageInView2 ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.5 },
          },
        }}
      >
        <motion.div
          className="flex h-full w-1/4"
          variants={{
            hidden: { y: 200, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        >
          <img
            src={Pic_5_1}
            srcSet={`
                ${Pic_5_1_400} 400w,
                ${Pic_5_1_800} 800w,
                ${Pic_5_1_1600} 1600w,
                ${Pic_5_1} 4160w
              `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full w-1/4 items-end"
          variants={{
            hidden: { y: -200, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        >
          <img
            src={Pic_5_2}
            srcSet={`
                ${Pic_5_2_400} 400w,
                ${Pic_5_2_800} 800w,
                ${Pic_5_2_1600} 1600w,
                ${Pic_5_2} 4160w
              `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full w-1/4"
          variants={{
            hidden: { y: 200, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        >
          <img
            src={Pic_5_3}
            srcSet={`
                ${Pic_5_3_400} 400w,
                ${Pic_5_3_800} 800w,
                ${Pic_5_3_1600} 1600w,
                ${Pic_5_3} 4160w
              `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full w-1/4 items-end"
          variants={{
            hidden: { y: -200, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        >
          <img
            src={Pic_5_4}
            srcSet={`
                          ${Pic_5_4_400} 400w,
                          ${Pic_5_4_800} 800w,
                          ${Pic_5_4_1600} 1600w,
                          ${Pic_5_4} 4160w
                        `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
      </motion.div>
      <div className="relative flex h-[100dvh] w-full snap-start gap-12 bg-black p-12 text-white">
        <TwoColumnImageSection
          leftImage={Pic_1_2}
          rightImage={Pic_1_3}
          altLeft="pic"
          altRight="pic"
        />
      </div>
    </div>
  );
};

export default FashionWeekDesktopView;
