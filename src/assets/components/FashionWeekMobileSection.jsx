import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StreetFashionWeekMobileSection from "./StreetFashionWeekMobileSection";

import Fw2Pic from "../../assets/test_resoource/fw-2.jpg";

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
          <img src={Fw2Pic} className="h-full object-contain"></img>
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img src={Fw2Pic} className="h-full object-contain"></img>
        </div>
        <div className="div-padding div-gap flex h-[100dvh] snap-start items-center justify-center">
          <img src={Fw2Pic} className="h-full object-contain"></img>
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
