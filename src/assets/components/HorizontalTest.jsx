import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalTest = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });
  
    // Section 3 horizontal movement
    const x = useTransform(scrollYProgress, [0.35, 0.55], ["100%", "-200%"]);
    // Section 3 reveal opacity/overlay effect
    const section3Opacity = useTransform(scrollYProgress, [0.35, 0.38], [0, 1]);
  
    return (
      <div ref={containerRef} className="h-[500vh] w-screen relative">
        {/* Section 1 */}
        <section className="h-screen w-screen flex items-center justify-center bg-red-400 text-white text-4xl">
          Section 1
        </section>
  
        {/* Section 2 (sticky) */}
        <section className="h-screen w-screen sticky top-0 flex items-center justify-center bg-blue-400 text-white text-4xl z-0">
          Section 2
        </section>
  
        {/* Section 3 overlay, sliding in horizontally */}
        <section className="h-screen w-screen sticky top-0 overflow-hidden z-10">
          <motion.div
            style={{ x, opacity: section3Opacity }}
            className="flex h-full w-[300vw] absolute top-0 left-0"
          >
            <div className="h-full w-screen flex items-center justify-center bg-green-400 text-white text-4xl">
              Section 3 - Page 1
            </div>
            <div className="h-full w-screen flex items-center justify-center bg-green-500 text-white text-4xl">
              Section 3 - Page 2
            </div>
            <div className="h-full w-screen flex items-center justify-center bg-green-600 text-white text-4xl">
              Section 3 - Page 3
            </div>
          </motion.div>
        </section>
  
        {/* Section 4 */}
        <section className="h-screen w-screen flex items-center justify-center bg-purple-400 text-white text-4xl">
          Section 4
        </section>
  
        {/* Section 5 */}
        <section className="h-screen w-screen flex items-center justify-center bg-yellow-400 text-white text-4xl">
          Section 5
        </section>
      </div>
  );
};

export default HorizontalTest;
