import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import StreetFashionWeekDesktopSection from "./StreetFashionWeekDesktopSection";
import FashionWeekDesktopGallerySection from "./FashionWeekDesktopGallerySection";
import TwoColumnImageSection from "./TwoColumnImageSection";

import Pic_1_2 from "../imgs/fashion-week-pic-1-2.webp";
import Pic_1_2_400 from "../imgs/fashion-week-pic-1-2-400.webp";
import Pic_1_2_800 from "../imgs/fashion-week-pic-1-2-800.webp";
import Pic_1_2_1600 from "../imgs/fashion-week-pic-1-2-1600.webp";
import Pic_1_2_2560 from "../imgs/fashion-week-pic-1-2-2560.webp";
import Pic_1_3 from "../imgs/fashion-week-pic-1-3.webp";
import Pic_1_3_400 from "../imgs/fashion-week-pic-1-3-400.webp";
import Pic_1_3_800 from "../imgs/fashion-week-pic-1-3-800.webp";
import Pic_1_3_1600 from "../imgs/fashion-week-pic-1-3-1600.webp";
import Pic_1_3_2560 from "../imgs/fashion-week-pic-1-3-2560.webp";
import Pic_2_2 from "../imgs/fashion-week-pic-2-2.webp";
import Pic_2_2_400 from "../imgs/fashion-week-pic-2-2-400.webp";
import Pic_2_2_800 from "../imgs/fashion-week-pic-2-2-800.webp";
import Pic_2_2_1600 from "../imgs/fashion-week-pic-2-2-1600.webp";
import Pic_2_2_2560 from "../imgs/fashion-week-pic-2-2-2560.webp";
import Pic_2_3 from "../imgs/fashion-week-pic-2-3.webp";
import Pic_2_3_400 from "../imgs/fashion-week-pic-2-3-400.webp";
import Pic_2_3_800 from "../imgs/fashion-week-pic-2-3-800.webp";
import Pic_2_3_1600 from "../imgs/fashion-week-pic-2-3-1600.webp";
import Pic_2_3_2560 from "../imgs/fashion-week-pic-2-3-2560.webp";
import Pic_4_1 from "../imgs/fashion-week-pic-4-1.webp";
import Pic_4_1_400 from "../imgs/fashion-week-pic-4-1-400.webp";
import Pic_4_1_800 from "../imgs/fashion-week-pic-4-1-800.webp";
import Pic_4_1_1600 from "../imgs/fashion-week-pic-4-1-1600.webp";
import Pic_4_1_2560 from "../imgs/fashion-week-pic-4-1-2560.webp";
import Pic_4_2 from "../imgs/fashion-week-pic-4-2.webp";
import Pic_4_2_400 from "../imgs/fashion-week-pic-4-2-400.webp";
import Pic_4_2_800 from "../imgs/fashion-week-pic-4-2-800.webp";
import Pic_4_2_1600 from "../imgs/fashion-week-pic-4-2-1600.webp";
import Pic_4_2_2560 from "../imgs/fashion-week-pic-4-2-2560.webp";
import Pic_5_1 from "../imgs/fashion-week-pic-5-1.webp";
import Pic_5_1_400 from "../imgs/fashion-week-pic-5-1-400.webp";
import Pic_5_1_800 from "../imgs/fashion-week-pic-5-1-800.webp";
import Pic_5_1_1600 from "../imgs/fashion-week-pic-5-1-1600.webp";
import Pic_5_1_2560 from "../imgs/fashion-week-pic-5-1-2560.webp";
import Pic_5_2 from "../imgs/fashion-week-pic-5-2.webp";
import Pic_5_2_400 from "../imgs/fashion-week-pic-5-2-400.webp";
import Pic_5_2_800 from "../imgs/fashion-week-pic-5-2-800.webp";
import Pic_5_2_1600 from "../imgs/fashion-week-pic-5-2-1600.webp";
import Pic_5_2_2560 from "../imgs/fashion-week-pic-5-2-2560.webp";
import Pic_5_3 from "../imgs/fashion-week-pic-5-3.webp";
import Pic_5_3_400 from "../imgs/fashion-week-pic-5-3-400.webp";
import Pic_5_3_800 from "../imgs/fashion-week-pic-5-3-800.webp";
import Pic_5_3_1600 from "../imgs/fashion-week-pic-5-3-1600.webp";
import Pic_5_3_2560 from "../imgs/fashion-week-pic-5-3-2560.webp";
import Pic_5_4 from "../imgs/fashion-week-pic-5-4.webp";
import Pic_5_4_400 from "../imgs/fashion-week-pic-5-4-400.webp";
import Pic_5_4_800 from "../imgs/fashion-week-pic-5-4-800.webp";
import Pic_5_4_1600 from "../imgs/fashion-week-pic-5-4-1600.webp";
import Pic_5_4_2560 from "../imgs/fashion-week-pic-5-4-2560.webp";
import Pic_6_1 from "../imgs/fashion-week-pic-6-1.webp";
import Pic_6_1_400 from "../imgs/fashion-week-pic-6-1-400.webp";
import Pic_6_1_800 from "../imgs/fashion-week-pic-6-1-800.webp";
import Pic_6_1_1600 from "../imgs/fashion-week-pic-6-1-1600.webp";
import Pic_6_1_2560 from "../imgs/fashion-week-pic-6-1-2560.webp";
import Pic_6_2 from "../imgs/fashion-week-pic-6-2.webp";
import Pic_6_2_400 from "../imgs/fashion-week-pic-6-2-400.webp";
import Pic_6_2_800 from "../imgs/fashion-week-pic-6-2-800.webp";
import Pic_6_2_1600 from "../imgs/fashion-week-pic-6-2-1600.webp";
import Pic_6_2_2560 from "../imgs/fashion-week-pic-6-2-2560.webp";

const FashionWeekDesktopSection = () => {
  const fashionWeekDesktopPageRef2 = useRef(null);
  const isFashionWeekDesktopPageInView2 = useInView(
    fashionWeekDesktopPageRef2,
    {
      once: false,
    },
  );
  return (
    <>
      <div className="relative flex h-[100dvh] w-full snap-start div-gap bg-black div-padding text-white">
        <TwoColumnImageSection
          leftImage={Pic_1_2}
          rightImage={Pic_1_3}
          altLeft="pic"
          altRight="pic"
          leftSrcSet={`
            ${Pic_1_2_400} 400w,
            ${Pic_1_2_800} 800w,
            ${Pic_1_2_1600} 1600w,
            ${Pic_1_2_2560} 2560w,
            ${Pic_1_2} 4160w
          `}
          rightSrcSet={`
            ${Pic_1_3_400} 400w,
            ${Pic_1_3_800} 800w,
            ${Pic_1_3_1600} 1600w,
            ${Pic_1_3_2560} 2560w,
            ${Pic_1_3} 4160w
          `}
        />
      </div>

      <div className="relative flex h-[100dvh] w-full snap-start bg-black div-padding text-white div-gap">
        <StreetFashionWeekDesktopSection />
      </div>

      <div className="relative flex h-[100dvh] w-full snap-start div-gap bg-black div-padding text-white">
        <TwoColumnImageSection
          leftImage={Pic_2_2}
          rightImage={Pic_2_3}
          altLeft="pic"
          altRight="pic"
          leftSrcSet={`
            ${Pic_2_2_400} 400w,
            ${Pic_2_2_800} 800w,
            ${Pic_2_2_1600} 1600w,
            ${Pic_2_2_2560} 2560w,
            ${Pic_2_2} 4160w
          `}
          rightSrcSet={`
            ${Pic_2_3_400} 400w,
            ${Pic_2_3_800} 800w,
            ${Pic_2_3_1600} 1600w,
            ${Pic_2_3_2560} 2560w,
            ${Pic_2_3} 4160w
          `}
        />
      </div>

      <div className="div-padding div-gap relative flex h-[100dvh] w-full snap-start bg-black text-white">
        <FashionWeekDesktopGallerySection />
      </div>

      <div className="relative flex h-[100dvh] w-full snap-start div-gap bg-black div-padding text-white">
        <TwoColumnImageSection
          leftImage={Pic_4_1}
          rightImage={Pic_4_2}
          altLeft="pic"
          altRight="pic"
          leftSrcSet={`
            ${Pic_4_1_400} 400w,
            ${Pic_4_1_800} 800w,
            ${Pic_4_1_1600} 1600w,
            ${Pic_4_1_2560} 2560w,
            ${Pic_4_1} 4160w
          `}
          rightSrcSet={`
            ${Pic_4_2_400} 400w,
            ${Pic_4_2_800} 800w,
            ${Pic_4_2_1600} 1600w,
            ${Pic_4_2_2560} 2560w,
            ${Pic_4_2} 4160w
          `}
        />
      </div>

      <motion.div
        ref={fashionWeekDesktopPageRef2}
        className="div-padding div-gap relative flex h-[100dvh] w-full snap-start justify-center bg-black text-white"
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
          className="flex h-full max-w-fit"
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
                ${Pic_5_1_2560} 2560w,
                ${Pic_5_1} 4160w
              `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full max-w-fit items-end"
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
                ${Pic_5_2_2560} 2560w,
                ${Pic_5_2} 4160w
              `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full max-w-fit"
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
                ${Pic_5_3_2560} 2560w,
                ${Pic_5_3} 4160w
              `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full max-w-fit items-end"
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
                ${Pic_5_4_2560} 2560w,
                ${Pic_5_4} 4160w
              `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
      </motion.div>
      <div className="relative flex h-[100dvh] w-full snap-start div-gap bg-black div-padding text-white">
        <TwoColumnImageSection
          leftImage={Pic_6_1}
          rightImage={Pic_6_2}
          altLeft="pic"
          altRight="pic"
          leftSrcSet={`
            ${Pic_6_1_400} 400w,
            ${Pic_6_1_800} 800w,
            ${Pic_6_1_1600} 1600w,
            ${Pic_6_1_2560} 2560w,
            ${Pic_6_1} 4160w
          `}
          rightSrcSet={`
            ${Pic_6_2_400} 400w,
            ${Pic_6_2_800} 800w,
            ${Pic_6_2_1600} 1600w,
            ${Pic_6_2_2560} 2560w,
            ${Pic_6_2} 4160w
          `}
        />
      </div>
    </>
  );
};

export default FashionWeekDesktopSection;
