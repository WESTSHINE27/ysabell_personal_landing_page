import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Pic1_1_1 from "../imgs/fashion-week-pic-1-1.jpg";
import Pic1_1_2 from "../imgs/fashion-week-pic-1-2.jpg";
import Pic1_1_3 from "../imgs/fashion-week-pic-1-3.jpg";

const VougeDesktopSection = () => {
  const vougeDesktopPageRef = useRef(null);
  const isVougeDesktopPageInView = useInView(vougeDesktopPageRef, {
    once: false,
  });
  return (
    <div
      className="h-full w-full flex items-center justify-start rounded-t-3xl bg-black text-white 
              shadow-[0_-8px_10px_rgba(0,0,0,0.6)] pt-16 pb-16 pr-16 pl-16 "
    >
      <motion.div
        ref={vougeDesktopPageRef}
        className="flex-3/5 w-full h-full flex flex-col"
        initial="hidden"
        animate={isVougeDesktopPageInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 1.2 } },
        }}
      >
        <motion.div
          className="w-full text-start pl-24"
          variants={{
            hidden: { clipPath: "inset(0 0 100% 0)" },
            show: {
              clipPath: "inset(0 0 0% 0)",
              transition: { duration: 1.2, ease: "easeInOut" },
            },
          }}
        >
          <p className="font-italiana text-[10rem] leading-none">FEATURE</p>
          <p className="font-italiana text-[10rem] leading-none">FEATURE</p>
          <p className="font-italiana text-[10rem] leading-none">FEATURE</p>
        </motion.div>

        <motion.div
          className="h-full flex flex-col justify-end self-end w-3/5 pr-12 text-justify"
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)" },
            show: {
              clipPath: "inset(0 0 0 0)",
              transition: { duration: 1.2, ease: "easeInOut" },
            },
          }}
        >
          <p className="text-xl font-bold pb-2 w-full">As Seen in VOGUE</p>
          <p>
            One of my proudest moments was having my work featured in VOGUE. It
            was an opportunity to share my vision and creativity with a wider
            audience. You can view the published feature here.
          </p>
        </motion.div>
      </motion.div>
      <div className="flex-2/5 w-full h-full items-start">
        <img src={Pic1_1_1} className="h-full object-contain" />
      </div>
    </div>
  );
};

export default VougeDesktopSection;
