import React from "react";
import ImageAutoScroller from "../../assets/components/ImageAutoScroller";
import PersonalPicForCarousell_1 from "../../assets/test_resoource/test_portrail1.jpg";
import PersonalPicForCarousell_2 from "../../assets/test_resoource/test_portrail2.jpg";
import PersonalPicForCarousell_4 from "../../assets/test_resoource/test_portrail4.jpg";
import PersonalPicForCarousell_5 from "../../assets/test_resoource/test_portrail5.jpg";
import PersonalPicForCarousell_6 from "../../assets/test_resoource/test_portrail6.jpg";
import PersonalPicForCarousell_7 from "../../assets/test_resoource/test_portrail7.jpg";
import PersonalPicForCarousell_8 from "../../assets/test_resoource/test_portrail8.jpg";

const images = [
  PersonalPicForCarousell_1,
  PersonalPicForCarousell_2,
  PersonalPicForCarousell_4,
  PersonalPicForCarousell_5,
  PersonalPicForCarousell_6,
  PersonalPicForCarousell_7,
  PersonalPicForCarousell_8,
]; 
const ImagesAutoScrollerSection = () => {
  return (
    <div className="snap-center h-screen w-full flex flex-col">
      <div className="h-1/2">
        <ImageAutoScroller images={images} direction="right" />
      </div>
      <div className="h-1/2">
        <ImageAutoScroller images={images} direction="left" />
      </div>
    </div>
  );
};

export default ImagesAutoScrollerSection;
