import React, { useState, useEffect } from "react";

const HoverSlideShow = ({ images, label }) => {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
useEffect(() => {
  let timeout, interval;

  if (hovering) {
    // First switch after 1500ms
    timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);

      // After that, keep switching every 1500ms
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 1500);
    }, 800);
  } else {
    setCurrent(0);
  }

  return () => {
    clearTimeout(timeout);
    clearInterval(interval);
  };
}, [hovering, images.length]);


  return (
    <div
      className="relative overflow-hidden lg:h-full lg:flex-1/2 2xl:flex-1/4"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
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
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Shadow overlay (desktop only when not hovering) */}
      {!hovering && (
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500"></div>
      )}

      {/* Label */}
      <p className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center text-4xl font-bold text-white md:bottom-10 md:text-6xl">
        {label}
      </p>
    </div>
  );
};

export default HoverSlideShow;
