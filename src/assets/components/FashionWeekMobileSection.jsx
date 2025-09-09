import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StreetFashionWeekMobileSection from "./StreetFashionWeekMobileSection";

import Pic_3_1 from "../imgs/fashion-week-pic-3-1.webp";
import Pic_3_1_400 from "../imgs/fashion-week-pic-3-1-400.webp";
import Pic_3_1_800 from "../imgs/fashion-week-pic-3-1-800.webp";
import Pic_3_1_1600 from "../imgs/fashion-week-pic-3-1-1600.webp";
import Pic_3_1_2560 from "../imgs/fashion-week-pic-3-1-2560.webp";
import Pic_3_2 from "../imgs/fashion-week-pic-3-2.webp";
import Pic_3_2_400 from "../imgs/fashion-week-pic-3-2-400.webp";
import Pic_3_2_800 from "../imgs/fashion-week-pic-3-2-800.webp";
import Pic_3_2_1600 from "../imgs/fashion-week-pic-3-2-1600.webp";
import Pic_3_2_2560 from "../imgs/fashion-week-pic-3-2-2560.webp";
import Pic_3_3 from "../imgs/fashion-week-pic-3-3.webp";
import Pic_3_3_400 from "../imgs/fashion-week-pic-3-3-400.webp";
import Pic_3_3_800 from "../imgs/fashion-week-pic-3-3-800.webp";
import Pic_3_3_1600 from "../imgs/fashion-week-pic-3-3-1600.webp";
import Pic_3_3_2560 from "../imgs/fashion-week-pic-3-3-2560.webp";
import Pic_3_4 from "../imgs/fashion-week-pic-3-4.webp";
import Pic_3_4_400 from "../imgs/fashion-week-pic-3-4-400.webp";
import Pic_3_4_800 from "../imgs/fashion-week-pic-3-4-800.webp";
import Pic_3_4_1600 from "../imgs/fashion-week-pic-3-4-1600.webp";
import Pic_3_4_2560 from "../imgs/fashion-week-pic-3-4-2560.webp";
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

const FashionWeekMobileSection = () => {
  const fashionWeekRef = useRef(null);
  const isFashionWeekInView = useInView(fashionWeekRef, { once: false });
  return (
    <>
      <div className="relative flex min-h-screen w-full snap-start flex-col items-center justify-center gap-2 bg-black px-6 py-8 text-white sm:gap-4 sm:px-8 sm:py-12 md:gap-6 md:px-12 md:py-16">
        <StreetFashionWeekMobileSection />
      </div>

      <div className="relative flex h-full w-full flex-col items-center justify-center bg-black text-white">
        <motion.p
          initial={{ x: "100%", opacity: 0 }}
          animate={
            isFashionWeekInView
              ? { x: 0, opacity: 1 }
              : { x: "100%", opacity: 0 }
          }
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-italiana xs:text-7xl sm-mob:text-8xl md-mob:text-8xl lg-mob:text-9xl sticky top-10 z-50 text-7xl sm:text-[9rem] md:text-[11rem] lg:text-[12rem]"
        >
          FASHION
        </motion.p>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_3_1}
            srcSet={`
              ${Pic_3_1_400} 400w,
              ${Pic_3_1_800} 800w,
              ${Pic_3_1_1600} 1600w,
              ${Pic_3_1_2560} 2560w,
              ${Pic_3_1} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_3_3}
            srcSet={`
              ${Pic_3_3_400} 400w,
              ${Pic_3_3_800} 800w,
              ${Pic_3_3_1600} 1600w,
              ${Pic_3_3_2560} 2560w,
              ${Pic_3_3} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
         <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_3_2}
            srcSet={`
              ${Pic_3_2_400} 400w,
              ${Pic_3_2_800} 800w,
              ${Pic_3_2_1600} 1600w,
              ${Pic_3_2_2560} 2560w,
              ${Pic_3_2} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_3_4}
            srcSet={`
              ${Pic_3_4_400} 400w,
              ${Pic_3_4_800} 800w,
              ${Pic_3_4_1600} 1600w,
              ${Pic_3_4_2560} 2560w,
              ${Pic_3_4} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_4_1}
            srcSet={`
              ${Pic_4_1_400} 400w,
              ${Pic_4_1_800} 800w,
              ${Pic_4_1_1600} 1600w,
              ${Pic_4_1_2560} 2560w,
              ${Pic_4_1} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_4_2}
            srcSet={`
              ${Pic_4_2_400} 400w,
              ${Pic_4_2_800} 800w,
              ${Pic_4_2_1600} 1600w,
              ${Pic_4_2_2560} 2560w,
              ${Pic_4_2} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
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
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
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
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
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
            className="h-full object-contain"
          />
        </div>
         <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
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
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_6_1}
            srcSet={`
              ${Pic_6_1_400} 400w,
              ${Pic_6_1_800} 800w,
              ${Pic_6_1_1600} 1600w,
              ${Pic_6_1_2560} 2560w,
              ${Pic_6_1} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img
            src={Pic_6_2}
            srcSet={`
              ${Pic_6_2_400} 400w,
              ${Pic_6_2_800} 800w,
              ${Pic_6_2_1600} 1600w,
              ${Pic_6_2_2560} 2560w,
              ${Pic_6_2} 4160w
            `}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>

        <motion.p
          ref={fashionWeekRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={
            isFashionWeekInView
              ? { x: 0, opacity: 1 }
              : { x: "100%", opacity: 0 }
          }
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-italiana xs:text-7xl sm-mob:text-8xl md-mob:text-8xl lg-mob:text-9xl sticky bottom-10 z-50 text-7xl sm:text-[9rem] md:text-[11rem] lg:text-[12rem]"
        >
          WEEK
        </motion.p>
      </div>
    </>
  );
};

export default FashionWeekMobileSection;
