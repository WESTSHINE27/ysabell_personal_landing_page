import React, { useState, useEffect } from "react";

const HoverSlideShow = ({ images, label }) => {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1535px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleChange = (e) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Handle slideshow
  useEffect(() => {
    let timeout, interval;

    if (isSmallScreen) {
      // Auto-play on small screens
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 2000);
    } else if (hovering) {
      // Hover-play on large screens
      timeout = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % images.length);
        }, 2000);
      }, 800);
    } else {
      setCurrent(0);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [hovering, isSmallScreen, images.length]);

  return (
    <div
      className="relative h-full overflow-hidden lg:flex-1/2 2xl:flex-1/4"
      onMouseEnter={() => !isSmallScreen && setHovering(true)}
      onMouseLeave={() => !isSmallScreen && setHovering(false)}
    >
      {/* Sliding container */}
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            srcSet={img.srcSet}
            sizes={img.sizes || "100vw"} // fallback if not provided
            alt={`${label}-${index}`}
            loading="lazy"
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Shadow overlay */}
      {!hovering && !isSmallScreen && (
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500"></div>
      )}

      {/* Label */}
      <p
        className="xs:text-5xl sm-mob:text-6xl md-mob:text-7xl lg-mob:text-7xl absolute bottom-1/10 left-1/2 z-10 -translate-x-1/2 text-center text-5xl font-bold text-white sm:text-8xl md:text-9xl lg:bottom-1/10 lg:text-7xl xl:text-8xl 2xl:text-7xl"
        style={{ textShadow: "2px 2px 6px rgba(0,0,0,5)" }}
      >
        {label}
      </p>
    </div>
  );
};

export default HoverSlideShow;
