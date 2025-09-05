const TwoColumnImageSection = ({
  leftImage,
  rightImage,
  altLeft = "",
  altRight = "",
  leftSrcSet = "",
  rightSrcSet = "",
}) => {
  return (
    <>
      <div className="flex h-full w-1/2 justify-end">
        <img
          src={leftImage}
          alt={altLeft}
          srcSet={leftSrcSet}
          loading="lazy"
          className="h-full object-contain"
        />
      </div>
      <div className="flex h-full w-1/2 justify-start">
        <img
          src={rightImage}
          srcSet={rightSrcSet}
          alt={altRight}
          loading="lazy"
          className="h-full object-contain"
        />
      </div>
    </>
  );
};

export default TwoColumnImageSection;
