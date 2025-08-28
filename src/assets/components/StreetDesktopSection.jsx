import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Pic1_2_1 from "../imgs/fashion-week-pic-2-1.webp";
import Pic1_2_2 from "../imgs/fashion-week-pic-2-2.webp";
import Pic1_2_3 from "../imgs/fashion-week-pic-2-3.webp";

const StreetDesktopSection = () => {
  const streetDesktopPageRef = useRef(null);
  const isStreetDesktopPageInView = useInView(streetDesktopPageRef, {
    once: false,
  });
  return (
    <div>
      <motion.div
        ref={streetDesktopPageRef}
        className="h-full w-full bg-black text-white flex items-center"
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
              transition: { duration: 1.6, ease: "easeInOut" },
            },
          }}
        >
          <p
            className="font-italiana text-[11rem]  
     rotate-180 [writing-mode:vertical-rl]"
          >
            STREET
          </p>
        </motion.div>

        <img src={Pic1_2_1} loading="lazy" className="h-full object-cover" />
        <div className="flex flex-col w-full h-full pl-12">
          <motion.div
            className="flex flex-col w-2/3"
            variants={{
              hidden: { clipPath: "inset(0 100% 0 0)" },
              show: {
                clipPath: "inset(0 0 0 0)",
                transition: { duration: 1.2, ease: "easeInOut" },
              },
            }}
          >
            <p className="text-xl font-bold pb-2">
              Street Style – Copenhagen Fashion Week
            </p>
            <p>
              One of my proudest moments was having my work featured in VOGUE.
              It was an opportunity to share my vision and creativity with a
              wider audience. You can view the published feature here.
            </p>
          </motion.div>
          <div class="flex-1 flex gap-6 overflow-hidden pt-6">
            <img
              src={Pic1_2_2}
              loading="lazy"
              className="w-1/2 h-full object-cover"
            />
            <img
              src={Pic1_2_3}
              loading="lazy"
              className="w-1/2 h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StreetDesktopSection;
