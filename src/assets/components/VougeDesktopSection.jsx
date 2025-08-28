import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Pic_1_1 from "../imgs/fashion-week-pic-1-1.webp";
import Pic_1_1_400 from "../imgs/fashion-week-pic-1-1-400.webp";
import Pic_1_1_800 from "../imgs/fashion-week-pic-1-1-800.webp";
import Pic_1_1_1600 from "../imgs/fashion-week-pic-1-1-1600.webp";

const VougeDesktopSection = () => {
  const vougeDesktopPageRef = useRef(null);
  const isVougeDesktopPageInView = useInView(vougeDesktopPageRef, {
    once: false,
  });
  return (
    <div className="flex h-full w-full items-center justify-start rounded-t-3xl bg-black text-white shadow-[0_-8px_10px_rgba(0,0,0,0.6)] sm:gap-2 sm:px-6 sm:py-8 lg:gap-6 lg:px-12 lg:py-16">
      <motion.div
        ref={vougeDesktopPageRef}
        className="flex h-full w-full flex-3/5 flex-col"
        initial="hidden"
        animate={isVougeDesktopPageInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 1.2 } },
        }}
      >
        <motion.div
          className="w-full pr-[18%] text-end"
          variants={{
            hidden: { clipPath: "inset(0 0 100% 0)" },
            show: {
              clipPath: "inset(0 0 0% 0)",
              transition: { duration: 1.2, ease: "easeInOut" },
            },
          }}
        >
          <p className="font-italiana  lg:text-9xl leading-none">FEATURE</p>
          <p className="font-italiana  lg:text-9xl leading-none">FEATURE</p>
          <p className="font-italiana  lg:text-9xl leading-none">FEATURE</p>

        </motion.div>

        <motion.div
          className="flex h-full w-3/5 flex-col justify-end self-end pr-12 text-justify"
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)" },
            show: {
              clipPath: "inset(0 0 0 0)",
              transition: { duration: 1.2, ease: "easeInOut" },
            },
          }}
        >
        
          <p className="w-full pb-2 lg:text-3xl font-bold">As Seen in VOGUE</p>
          <p className="sm:text-base lg:text-xl">
            One of my proudest moments was having my work featured in VOGUE. It
            was an opportunity to share my vision and creativity with a wider
            audience. You can view the published feature here.
          </p>
        </motion.div>
      </motion.div>
      <div className="h-full w-full flex-2/5 items-start">
        <img
          src={Pic_1_1}
          srcSet={`
                                          ${Pic_1_1_400} 400w,
                                          ${Pic_1_1_800} 800w,
                                          ${Pic_1_1_1600} 1600w,
                                          ${Pic_1_1} 4160w
                                        `}
          loading="lazy"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
};

export default VougeDesktopSection;
