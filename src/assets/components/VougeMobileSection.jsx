import Pic_1_1 from "../imgs/fashion-week-pic-1-1.webp";
import Pic_1_1_400 from "../imgs/fashion-week-pic-1-1-400.webp";
import Pic_1_1_800 from "../imgs/fashion-week-pic-1-1-800.webp";
import Pic_1_1_1600 from "../imgs/fashion-week-pic-1-1-1600.webp";

import Pic_1_2 from "../imgs/fashion-week-pic-1-2.webp";
import Pic_1_2_400 from "../imgs/fashion-week-pic-1-2-400.webp";
import Pic_1_2_800 from "../imgs/fashion-week-pic-1-2-800.webp";
import Pic_1_2_1600 from "../imgs/fashion-week-pic-1-2-1600.webp";

import Pic_1_3 from "../imgs/fashion-week-pic-1-3.webp";
import Pic_1_3_400 from "../imgs/fashion-week-pic-1-3-400.webp";
import Pic_1_3_800 from "../imgs/fashion-week-pic-1-3-800.webp";
import Pic_1_3_1600 from "../imgs/fashion-week-pic-1-3-1600.webp";

const VougeMobileSection = () => {
  return (
    <>
      <div className="flex h-full snap-none flex-col items-center justify-start gap-2 rounded-t-3xl bg-black px-6 py-8 text-white shadow-[0_-8px_10px_rgba(0,0,0,0.6)] sm:gap-4 sm:px-8 sm:py-12 md:gap-6 md:px-12 md:py-16">
        <p className="font-italiana text-7xl sm:text-8xl md:text-9xl">
          FEATURE
        </p>
        <img
          src={Pic_1_1}
          srcSet={`
                                  ${Pic_1_1_400} 400w,
                                  ${Pic_1_1_800} 800w,
                                  ${Pic_1_1_1600} 1600w,
                                  ${Pic_1_1} 4160w
                                `}
          loading="lazy"
          className="w-full object-contain"
        ></img>
        <div className="flex flex-col items-center justify-center text-center pb-6">
          <p className="pb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">As Seen in VOGUE</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            One of my proudest moments was having my work featured in VOGUE. It
            was an opportunity to share my vision and creativity with a wider
            audience. You can view the published feature here.
          </p>
        </div>
        <img
          src={Pic_1_2}
          srcSet={`
                                  ${Pic_1_2_400} 400w,
                                  ${Pic_1_2_800} 800w,
                                  ${Pic_1_2_1600} 1600w,
                                  ${Pic_1_2} 4160w
                                `}
          loading="lazy"
          className="w-full object-contain pb-4"
        ></img>
        <img
          src={Pic_1_3}
          srcSet={`
                                  ${Pic_1_3_400} 400w,
                                  ${Pic_1_3_800} 800w,
                                  ${Pic_1_3_1600} 1600w,
                                  ${Pic_1_3} 4160w
                                `}
          loading="lazy"
          className="w-full object-contain"
        ></img>
      </div>
    </>
  );
};

export default VougeMobileSection;
