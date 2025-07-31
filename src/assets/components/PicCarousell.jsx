import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const PicCarousell = ({ images, direction = "left" }) => {
  const containerRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const isLeft = direction === "left";

  // Measure the width of one full set of images
  useEffect(() => {
    if (containerRef.current) {
      const total = containerRef.current.scrollWidth / 2;
      setScrollWidth(total);
      setOffsetX(isLeft ? 0 : -total); // 👈 Initial position depends on direction
    }
  }, [images, isLeft]);

  // Animate frame-by-frame
  useAnimationFrame((t, delta) => {
    setOffsetX((prev) => {
      const speed = 0.1;
      let next = isLeft ? prev - delta * speed : prev + delta * speed;

      // Reset loop logic
      if (isLeft && Math.abs(next) >= scrollWidth) return 0;
      if (!isLeft && next >= 0) return -scrollWidth;

      return next;
    });
  });

  return (
    <div className="overflow-hidden w-full h-full">
      <motion.div
        ref={containerRef}
        className="flex h-full items-center"
        style={{ x: offsetX }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            className="h-full object-cover w-auto"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PicCarousell;
