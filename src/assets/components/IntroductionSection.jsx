import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Personal_Pic from "../imgs/personal-pic.webp";
import Personal_Pic_400 from "../imgs/personal-pic-400.webp";
import Personal_Pic_800 from "../imgs/personal-pic-800.webp";
import Personal_Pic_1600 from "../imgs/personal-pic-1600.webp";
import Personal_Pic_2560 from "../imgs/personal-pic-2560.webp";

const IntroductionSection = () => {
  const introSectionRef = useRef(null);
  const isIntroInView = useInView(introSectionRef, { once: false });
  return (
    <>
      {/* Image section */}
      <div className="flex h-3/5 items-center justify-center p-4 lg:h-full lg:w-1/2">
        <img
          alt="photo"
          src={Personal_Pic}
          srcSet={`
            ${Personal_Pic_400} 400w,
            ${Personal_Pic_800} 800w,
            ${Personal_Pic_1600} 1600w,
            ${Personal_Pic_2560} 2560w,
            ${Personal_Pic} 4160w
          `}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Diving line (Mobile) */}
      <motion.div
        initial={{ width: 0 }}
        animate={isIntroInView ? { width: "90%" } : { width: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto block h-0.5 shrink-0 bg-black lg:hidden"
      />
      {/* Diving line (Desktop) */}
      <div className="hidden items-center lg:flex">
        <motion.div
          initial={{ height: 0 }}
          animate={isIntroInView ? { height: "80%" } : { height: 0 }}
          transition={{ duration: 1 }}
          className="w-0.5 bg-black"
        />
      </div>

      {/* Text section */}
      <div className="flex h-[calc(40dvh-1rem)] flex-col items-start justify-start px-6 pb-8 md:px-8 md:pb-10 lg:h-full lg:w-1/2 lg:items-center lg:justify-center lg:py-10">
        {/* Animation div for text */}
        <motion.div
          ref={introSectionRef}
          initial={{
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
          }}
          animate={{
            clipPath: isIntroInView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            opacity: isIntroInView ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="scrollbar-none max-h-fit w-full overflow-y-auto lg:h-[80%]"
        >
          {/* Name */}
          <p className="sm-mob:text-3xl text-2xl font-bold sm:text-3xl md:mb-1 md:text-4xl lg:text-5xl">
            Ysabell Tan
          </p>
          {/* Position */}
          <p className="sm-mob:text-xl mb-1 text-lg sm:text-xl md:mb-4 md:text-2xl lg:text-3xl">
            Influencer
          </p>
          {/* Description */}
          <p className="sm-mob:text-base text-justify text-sm sm:text-base md:text-lg lg:text-xl">
            Ysabel is a sweet style girl, you'll often see her sweet smile,
            which is her signature. She can also pull off a sporty look with
            energy. Beside photos, Ysabel will also make some trending reels
            such as popular K-pop videos or TikTok trend ! When creating an
            advertise reels, she find creative ways to present the content and
            make it interesting.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default IntroductionSection;
