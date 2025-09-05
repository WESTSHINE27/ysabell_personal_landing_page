import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Pic_1_1 from "../imgs/fashion-week-pic-1-1.webp";
import Pic_1_1_400 from "../imgs/fashion-week-pic-1-1-400.webp";
import Pic_1_1_800 from "../imgs/fashion-week-pic-1-1-800.webp";
import Pic_1_1_1600 from "../imgs/fashion-week-pic-1-1-1600.webp";
import Pic_1_1_2560 from "../imgs/fashion-week-pic-1-1-2560.webp";

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

const VougeMobileSection = () => {
  const vougeMobilePageRef = useRef(null);
  const isVougeMobilePageInView = useInView(vougeMobilePageRef, {
    once: false,
  });
  return (
    <>
      <motion.div
        ref={vougeMobilePageRef}
        initial="hidden"
        animate={isVougeMobilePageInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 1.2 } },
        }}
        className="flex h-full snap-none flex-col items-center justify-start gap-2 rounded-t-3xl bg-black px-6 py-8 text-white shadow-[0_-8px_10px_rgba(0,0,0,0.6)] sm:gap-4 sm:px-8 sm:py-12 md:gap-6 md:px-12 md:py-16"
      >
        <motion.p
          className="font-italiana sm-mob:text-8xl lg-mob:text-9xl text-7xl sm:text-[9rem] md:text-[10rem]"
          variants={{
            hidden: { clipPath: "inset(0 0 100% 0)" },
            show: {
              clipPath: "inset(0 0 0% 0)",
              transition: { duration: 1.2, ease: "easeInOut" },
            },
          }}
        >
          FEATURE
        </motion.p>
        <img
          src={Pic_1_1}
          srcSet={`
                                  ${Pic_1_1_400} 400w,
                                  ${Pic_1_1_800} 800w,
                                  ${Pic_1_1_1600} 1600w,
                                  ${Pic_1_1_2560} 2560w,
                                  ${Pic_1_1} 4160w
                                `}
          loading="lazy"
          className="w-full object-contain"
        ></img>
        <motion.div
          className="flex flex-col items-center justify-center pb-6 text-center"
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)" },
            show: {
              clipPath: "inset(0 0 0 0)",
              transition: { duration: 1.2, ease: "easeInOut" },
            },
          }}
        >
          <p className="sm-mob:text-xl pb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
            As Seen in VOGUE
          </p>
          <p className="sm-mob:text-base text-sm sm:text-base md:text-lg lg:text-xl">
            One of my proudest moments was having my work featured in VOGUE. It
            was an opportunity to share my vision and creativity with a wider
            audience. You can view the published feature here.
          </p>
        </motion.div>
        <img
          src={Pic_1_2}
          srcSet={`
                                  ${Pic_1_2_400} 400w,
                                  ${Pic_1_2_800} 800w,
                                  ${Pic_1_2_1600} 1600w,
                                  ${Pic_1_2_2560} 2560w,
                                  ${Pic_1_2} 4160w
                                `}
          loading="lazy"
          className="w-full object-contain pb-4"
        ></img>
        <img
          src={Pic_1_3}
          srcSet={`
                                  ${Pic_1_3_400} 400w,
                                  ${Pic_1_3_800} 800w,
                                  ${Pic_1_3_1600} 1600w,
                                  ${Pic_1_3_2560} 2560w,
                                  ${Pic_1_3} 4160w
                                `}
          loading="lazy"
          className="w-full object-contain"
        ></img>
      </motion.div>
    </>
  );
};

export default VougeMobileSection;
