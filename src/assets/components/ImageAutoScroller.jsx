import React from "react";

const ImageAutoScroller = ({ images, direction = "left" }) => {
  const animationClass =
    direction === "left"
      ? "animate-infinite-scroll-left"
      : "animate-infinite-scroll-right";
  return (
    <div className="overflow-hidden w-full h-full flex">
      <div className={`${animationClass} h-full items-center`}>
        {[...images, ...images].map((image) => {
          return (
            <img
              src={image}
              className="h-full w-[300px] object-cover flex-shrink-0"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageAutoScroller;
