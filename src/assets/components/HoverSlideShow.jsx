import React, { useState, useEffect } from "react";

// Hook to check if screen is smaller than md (768px by default)
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const HoverSlideShow = ({ images, label }) => {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    let interval;
    if (isMobile || hovering) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 1500);
    } else {
      setCurrent(0);
    }
    return () => clearInterval(interval);
  }, [hovering, isMobile, images.length]);

  return (
    <div
      className="flex-1/2 md:flex-1/4 h-1/2 md:h-full relative overflow-hidden"
      onMouseEnter={() => !isMobile && setHovering(true)}
      onMouseLeave={() => !isMobile && setHovering(false)}
    >
      {/* Sliding container */}
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${label}-${index}`}
            className="h-full w-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Shadow overlay (desktop only when not hovering) */}
      {!isMobile && !hovering && (
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500"></div>
      )}

      {/* Label */}
      <p className="text-white font-bold text-4xl md:text-6xl absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 z-10 text-center">
        {label}
      </p>
    </div>
  );
};

export default HoverSlideShow;
