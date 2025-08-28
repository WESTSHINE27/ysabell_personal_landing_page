import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import FashionWeekDesktopView from "./FashionWeekDesktopView";

import Fw2Pic from "../../assets/test_resoource/fw-2.jpg";
import Fw4Pic from "../../assets/test_resoource/fw-4.png";
import Fw5Pic from "../../assets/test_resoource/fw-5.jpg";

const FashionWeekSection = () => {
  const fashionWeekRef = useRef(null);
  const isFashionWeekInView = useInView(fashionWeekRef, { once: false });
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
        

        <div className=" relative snap-start min-h-screen w-full bg-black p-6 text-white items-center justify-center flex flex-col">
          <div className="relative w-full">
            {/* Image */}
            <img src={Fw2Pic} className="object-contain w-full" />

            {/* Overlay text */}
            <p
              className="font-italiana text-8xl absolute top-1/2 left-0 -translate-y-1/2 
           rotate-180 [writing-mode:vertical-rl] z-10"
            >
              STREET
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-6">
            <p className="text-xl font-bold pb-2">
              Street Style – Copenhagen Fashion Week
            </p>
            <p>
              One of my proudest moments was having my work featured in VOGUE.
              It was an opportunity to share my vision and creativity with a
              wider audience. You can view the published feature here.
            </p>
          </div>
          <img src={Fw2Pic} className="object-contain pb-6"></img>
          <img src={Fw2Pic} className="object-contain"></img>
        </div>

        <div className="h-min w-full relative flex flex-col items-center justify-center bg-black text-white">
          <motion.p
            initial={{ x: "100%", opacity: 0 }}
            animate={
              isFashionWeekInView
                ? { x: 0, opacity: 1 }
                : { x: "100%", opacity: 0 }
            }
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-italiana text-7xl sticky top-10 z-50"
          >
            FASHION
          </motion.p>
          <div className="snap-start h-[100dvh] flex items-center justify-center px-6 py-8">
            <img src={Fw2Pic} className="object-contain min-h-full"></img>
          </div>
          <div className="snap-start h-[100dvh] flex items-center justify-center px-6 py-8">
            <img src={Fw4Pic} className="object-contain min-h-full"></img>
          </div>
          <div className="snap-start h-[100dvh] flex items-center justify-center px-6 py-8">
            <img src={Fw5Pic} className="object-contain min-h-full"></img>
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
            className="font-italiana text-7xl sticky bottom-10 z-50"
          >
            WEEK
          </motion.p>
        </div>
      </div>

      {/* Desktop View */}
      <FashionWeekDesktopView />
    </>
  );
};

export default FashionWeekSection;
