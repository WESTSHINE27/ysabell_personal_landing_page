import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Pic_2_1 from "../imgs/fashion-week-pic-2-1.webp";
import Pic_2_1_400 from "../imgs/fashion-week-pic-2-1-400.webp";
import Pic_2_1_800 from "../imgs/fashion-week-pic-2-1-800.webp";
import Pic_2_1_1600 from "../imgs/fashion-week-pic-2-1-1600.webp";
import Pic_2_1_2560 from "../imgs/fashion-week-pic-2-1-2560.webp";


const StreetFashionWeekDesktopSection = () => {
  const streetDesktopPageRef = useRef(null);
  const isStreetDesktopPageInView = useInView(streetDesktopPageRef, {
    once: false,
  });
  return (
      <motion.div
        ref={streetDesktopPageRef}
        className="flex h-full w-full items-center justify-center bg-black text-white  gap-2 sm:gap-4 md:gap-6 lg:gap-8"
        initial="hidden"
        animate={isStreetDesktopPageInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 1.3 } },
        }}
      >
        <motion.div
          variants={{
            hidden: { y: 500, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 1.2, ease: "easeInOut" },
            },
          }}
        >
          <p className="font-italiana rotate-180 lg:text-[11rem] xl:text-[12rem] [writing-mode:vertical-rl] leading-none">
            STREET
          </p>
        </motion.div>

        <img
          alt="pic"
          src={Pic_2_1}
          srcSet={`
                ${Pic_2_1_400} 400w,
                ${Pic_2_1_800} 800w,
                ${Pic_2_1_1600} 1600w,
                ${Pic_2_1_2560} 2560w,
                ${Pic_2_1} 4160w
             `}
          loading="lazy"
          className="h-full object-cover"
        />
        <div className="relative flex h-full lg:w-[30%] flex-col justify-center">
          <motion.div
            className="flex w-full flex-col"
            variants={{
              hidden: { clipPath: "inset(0 100% 0 0)" },
              show: {
                clipPath: "inset(0 0 0 0)",
                transition: { duration: 1.2, ease: "easeInOut" },
              },
            }}
          >
            <p className="pb-2 lg:text-3xl font-bold">
              Street Style – Copenhagen Fashion Week
            </p>
            <p className="lg:text-xl">
              One of my proudest moments was having my work featured in VOGUE.
              It was an opportunity to share my vision and creativity with a
              wider audience. You can view the published feature here.
            </p>
          </motion.div>
          
        </div>
      </motion.div>
  );
};

export default StreetFashionWeekDesktopSection;
