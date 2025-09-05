import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Pic_2_1 from "../imgs/fashion-week-pic-2-1.webp";
import Pic_2_1_400 from "../imgs/fashion-week-pic-2-1-400.webp";
import Pic_2_1_800 from "../imgs/fashion-week-pic-2-1-800.webp";
import Pic_2_1_1600 from "../imgs/fashion-week-pic-2-1-1600.webp";
import Pic_2_2 from "../imgs/fashion-week-pic-2-2.webp";
import Pic_2_2_400 from "../imgs/fashion-week-pic-2-2-400.webp";
import Pic_2_2_800 from "../imgs/fashion-week-pic-2-2-800.webp";
import Pic_2_2_1600 from "../imgs/fashion-week-pic-2-2-1600.webp";
import Pic_2_3 from "../imgs/fashion-week-pic-2-3.webp";
import Pic_2_3_400 from "../imgs/fashion-week-pic-2-3-400.webp";
import Pic_2_3_800 from "../imgs/fashion-week-pic-2-3-800.webp";
import Pic_2_3_1600 from "../imgs/fashion-week-pic-2-3-1600.webp";

const StreetFashionWeekMobileSection = () => {
  const streetMobilePageRef = useRef(null);
  const isStreetMobilePageInView = useInView(streetMobilePageRef, {
    once: false,
  });
  return (
    <>
      <motion.div
        ref={streetMobilePageRef}
        className="div-gap flex w-full flex-col"
        initial="hidden"
        animate={isStreetMobilePageInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 1.3 } },
        }}
      >
        <div className="w-full relative">
          {/* Image */}
          <img
            alt="pic"
            src={Pic_2_1}
            srcSet={`
                        ${Pic_2_1_400} 400w,
                        ${Pic_2_1_800} 800w,
                        ${Pic_2_1_1600} 1600w,
                        ${Pic_2_1} 4160w
                     `}
            loading="lazy"
            className="w-full object-contain"
          />

          {/* Overlay text */}
          <motion.div
            variants={{
              hidden: { y: -200, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: "easeInOut" },
              },
            }}
            className="absolute top-3/5 left-0 z-10 -translate-y-1/2 rotate-180"
          >
            <p className="font-italiana sm-mob:text-8xl md-mob:text-[9rem] lg-mob:text-[10rem] text-8xl [writing-mode:vertical-rl] sm:text-[11rem] md:text-[12rem]">
              STREET
            </p>
          </motion.div>
        </div>

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
            Street Style – Copenhagen Fashion Week
          </p>
          <p className="sm-mob:text-base text-sm sm:text-base md:text-lg lg:text-xl">
            One of my proudest moments was having my work featured in VOGUE. It
            was an opportunity to share my vision and creativity with a wider
            audience. You can view the published feature here.
          </p>
        </motion.div>
      </motion.div>

      <img
        alt="pic"
        src={Pic_2_2}
        srcSet={`
                      ${Pic_2_2_400} 400w,
                      ${Pic_2_2_800} 800w,
                      ${Pic_2_2_1600} 1600w,
                      ${Pic_2_2} 4160w
                    `}
        loading="lazy"
        className="object-contain pb-6"
      ></img>
      <img
        alt="pic"
        src={Pic_2_3}
        srcSet={`
                      ${Pic_2_3_400} 400w,
                      ${Pic_2_3_800} 800w,
                      ${Pic_2_3_1600} 1600w,
                      ${Pic_2_3} 4160w
                   `}
        loading="lazy"
        className="object-contain"
      ></img>
    </>
  );
};

export default StreetFashionWeekMobileSection;
