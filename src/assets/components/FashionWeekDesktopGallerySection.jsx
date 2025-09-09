import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const FashionWeekDesktopGallerySection = () => {
  const fashionWeekDesktopPageRef = useRef(null);
  const isFashionWeekDesktopPageInView = useInView(fashionWeekDesktopPageRef, {
    once: false,
  });
  return (
    <>
      <motion.p
        className="font-italiana absolute top-6 z-50 lg:left-[10%] lg:text-[10rem] xl:left-[15%] xl:text-[11rem] 2xl:text-[12rem]"
        initial={{ x: -500, opacity: 0 }}
        animate={
          isFashionWeekDesktopPageInView
            ? { x: 0, opacity: 1 }
            : { x: -500, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        FASHION
      </motion.p>
      <motion.p
        className="font-italiana absolute bottom-6 z-50 lg:right-[10%] lg:text-[10rem] xl:right-[15%] xl:text-[11rem] 2xl:text-[12rem]"
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
        className="div-gap flex h-full w-full justify-center"
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
          className="flex h-full max-w-fit items-end"
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
              ${Pic_3_1_800} 800w,
              ${Pic_3_1_1600} 1600w,
              ${Pic_3_1_2560} 2560w,
              ${Pic_3_1} 4160w
            `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full max-w-fit -translate-y-[calc(25%/3)] items-end"
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
              ${Pic_3_2_2560} 2560w,
              ${Pic_3_2} 4160w
            `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full max-w-fit -translate-y-[calc(25%*2/3)] items-end"
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
              ${Pic_3_3_2560} 2560w,
              ${Pic_3_3} 4160w
            `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex h-full max-w-fit -translate-y-[calc(25%)] items-end"
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
              ${Pic_3_4_2560} 2560w,
              ${Pic_3_4} 4160w
            `}
            loading="lazy"
            className="h-3/4 w-full object-contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FashionWeekDesktopGallerySection;
