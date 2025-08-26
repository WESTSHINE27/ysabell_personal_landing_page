import React from "react";

const TwoColumnImageSection = ({
  leftImage,
  rightImage,
  altLeft = "",
  altRight = "",
}) => {
  return (
    <>
      <div className="w-1/2 h-full flex justify-end">
        <img src={leftImage} alt={altLeft} className="h-full object-contain" />
      </div>
      <div className="w-1/2 h-full flex justify-start">
        <img
          src={rightImage}
          alt={altRight}
          className="h-full object-contain"
        />
      </div>
    </>
  );
};

export default TwoColumnImageSection;
