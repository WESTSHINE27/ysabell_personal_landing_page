const ImageAutoScroller = ({ images, direction = "left" }) => {
  const animationClass =
    direction === "left"
      ? "animate-infinite-scroll-left"
      : "animate-infinite-scroll-right";

  return (
    <div className="overflow-hidden w-full h-full flex">
      <div className={`${animationClass} h-full items-center`}>
        {[...images, ...images].map((image, index) => {
          return (
            <img
              key={index}
              src={image.src}
              srcSet={image.srcSet || undefined}
              alt={image.alt || `scroll-img-${index}`}
              className="h-full w-[300px] object-cover flex-shrink-0"
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageAutoScroller;
