import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Pic_3_1 from "../imgs/fashion-week-pic-3-1.webp";
import Pic_3_1_400 from "../imgs/fashion-week-pic-3-1-400.webp";
import Pic1_3_1_800 from "../imgs/fashion-week-pic-3-1-800.webp";
import Pic_3_1_1600 from "../imgs/fashion-week-pic-3-1-1600.webp";

import Pic_3_2 from "../imgs/fashion-week-pic-3-2.webp";
import Pic_3_2_400 from "../imgs/fashion-week-pic-3-1-400.webp";
import Pic_3_2_800 from "../imgs/fashion-week-pic-3-1-800.webp";
import Pic_3_2_1600 from "../imgs/fashion-week-pic-3-1-1600.webp";

import Pic_3_3 from "../imgs/fashion-week-pic-3-3.webp";
import Pic_3_3_400 from "../imgs/fashion-week-pic-3-1-400.webp";
import Pic_3_3_800 from "../imgs/fashion-week-pic-3-1-800.webp";
import Pic_3_3_1600 from "../imgs/fashion-week-pic-3-1-1600.webp";

import Pic_3_4 from "../imgs/fashion-week-pic-3-4.webp";
import Pic_3_4_400 from "../imgs/fashion-week-pic-3-4-400.webp";
import Pic_3_4_800 from "../imgs/fashion-week-pic-3-4-800.webp";
import Pic_3_4_1600 from "../imgs/fashion-week-pic-3-4-1600.webp";

const FashionWeekGallerySection = () => {
  const fashionWeekDesktopPageRef = useRef(null);
  const isFashionWeekDesktopPageInView = useInView(fashionWeekDesktopPageRef, {
    once: false,
  });
  return (
    <>
      <motion.p
        className="font-italiana absolute top-6 left-48 text-[10rem] z-50"
        initial={{ x: -500, opacity: 0 }}
        animate={
          isFashionWeekDesktopPageInView
            ? { x: 0, opacity: 1 } // slide in + show
            : { x: -500, opacity: 0 } // slide back out if not in view
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        FASHION
      </motion.p>
      <motion.p
        className="font-italiana absolute bottom-6 right-48 text-[10rem] z-50"
        initial={{ x: 500, opacity: 0 }}
        animate={
          isFashionWeekDesktopPageInView
            ? { x: 0, opacity: 1 }
            : { x: 500, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        WEEK
      </motion.p>

      <motion.div
        ref={fashionWeekDesktopPageRef}
        className="flex w-full h-full"
        initial="hidden"
        animate={isFashionWeekDesktopPageInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: { delayChildren: 0.9, staggerChildren: 0.5 },
          },
        }}
      >
        <motion.div
          className="flex items-end h-full w-1/4"
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
            src={Pic_3_1}
            srcSet={`
              ${Pic_3_1_400} 400w,
              ${Pic1_3_1_800} 800w,
              ${Pic_3_1_1600} 1600w,
              ${Pic_3_1} 4160w
            `}
            loading="lazy"
            className="w-full h-3/4 object-contain"
          />
        </motion.div>
        <motion.div
          className="flex items-end h-full w-1/4 -translate-y-[calc(25%/3)]"
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
            src={Pic_3_2}
            srcSet={`
              ${Pic_3_2_400} 400w,
              ${Pic_3_2_800} 800w,
              ${Pic_3_2_1600} 1600w,
              ${Pic_3_2} 4160w
            `}
            loading="lazy"
            className="w-full h-3/4 object-contain"
          />
        </motion.div>
        <motion.div
          className="flex items-end h-full w-1/4 -translate-y-[calc(25%*2/3)]"
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
            src={Pic_3_3}
            srcSet={`
              ${Pic_3_3_400} 400w,
              ${Pic_3_3_800} 800w,
              ${Pic_3_3_1600} 1600w,
              ${Pic_3_3} 4160w
            `}
            loading="lazy"
            className="w-full h-3/4 object-contain"
          />
        </motion.div>
        <motion.div
          className="flex items-end h-full w-1/4 -translate-y-[calc(25%)]"
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
            src={Pic_3_4}
            srcSet={`
              ${Pic_3_4_400} 400w,
              ${Pic_3_4_800} 800w,
              ${Pic_3_4_1600} 1600w,
              ${Pic_3_4} 4160w
            `}
            loading="lazy"
            className="w-full h-3/4 object-contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FashionWeekGallerySection;
