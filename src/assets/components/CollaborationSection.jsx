import HoverSlideShow from "../../assets/components/HoverSlideShow";
import Burberry_Pic_1 from "../imgs/burberry-pic-1.webp";
import Burberry_Pic_1_2560 from "../imgs/burberry-pic-1-2560.webp";
import Burberry_Pic_1_1600 from "../imgs/burberry-pic-1-1600.webp";
import Burberry_Pic_1_800 from "../imgs/burberry-pic-1-800.webp";
import Burberry_Pic_1_400 from "../imgs/burberry-pic-1-400.webp";
import Burberry_Pic_2 from "../imgs/burberry-pic-2.webp";
import Burberry_Pic_2_2560 from "../imgs/burberry-pic-2-2560.webp";
import Burberry_Pic_2_1600 from "../imgs/burberry-pic-2-1600.webp";
import Burberry_Pic_2_800 from "../imgs/burberry-pic-2-800.webp";
import Burberry_Pic_2_400 from "../imgs/burberry-pic-2-400.webp";
import Burberry_Pic_3 from "../imgs/burberry-pic-3.webp";
import Burberry_Pic_3_2560 from "../imgs/burberry-pic-3-2560.webp";
import Burberry_Pic_3_1600 from "../imgs/burberry-pic-3-1600.webp";
import Burberry_Pic_3_800 from "../imgs/burberry-pic-3-800.webp";
import Burberry_Pic_3_400 from "../imgs/burberry-pic-3-400.webp";
import Ysl_Pic_1 from "../imgs/ysl-pic-1.webp";
import Ysl_Pic_1_2560 from "../imgs/ysl-pic-1-2560.webp";
import Ysl_Pic_1_1600 from "../imgs/ysl-pic-1-1600.webp";
import Ysl_Pic_1_800 from "../imgs/ysl-pic-1-800.webp";
import Ysl_Pic_1_400 from "../imgs/ysl-pic-1-400.webp";
import Ysl_Pic_2 from "../imgs/ysl-pic-2.webp";
import Ysl_Pic_2_2560 from "../imgs/ysl-pic-2-2560.webp";
import Ysl_Pic_2_1600 from "../imgs/ysl-pic-2-1600.webp";
import Ysl_Pic_2_800 from "../imgs/ysl-pic-2-800.webp";
import Ysl_Pic_2_400 from "../imgs/ysl-pic-2-400.webp";
import Ysl_Pic_3 from "../imgs/ysl-pic-3.webp";
import Ysl_Pic_3_2560 from "../imgs/ysl-pic-3-2560.webp";
import Ysl_Pic_3_1600 from "../imgs/ysl-pic-3-1600.webp";
import Ysl_Pic_3_800 from "../imgs/ysl-pic-3-800.webp";
import Ysl_Pic_3_400 from "../imgs/ysl-pic-3-400.webp";
import Dior_Pic_1 from "../imgs/dior-pic-1.webp";
import Dior_Pic_1_2560 from "../imgs/dior-pic-1-2560.webp";
import Dior_Pic_1_1600 from "../imgs/dior-pic-1-1600.webp";
import Dior_Pic_1_800 from "../imgs/dior-pic-1-800.webp";
import Dior_Pic_1_400 from "../imgs/dior-pic-1-400.webp";
import Dior_Pic_2 from "../imgs/dior-pic-2.webp";
import Dior_Pic_2_2560 from "../imgs/dior-pic-2-2560.webp";
import Dior_Pic_2_1600 from "../imgs/dior-pic-2-1600.webp";
import Dior_Pic_2_800 from "../imgs/dior-pic-2-800.webp";
import Dior_Pic_2_400 from "../imgs/dior-pic-2-400.webp";
import Dior_Pic_3 from "../imgs/dior-pic-3.webp";
import Dior_Pic_3_2560 from "../imgs/dior-pic-3-2560.webp";
import Dior_Pic_3_1600 from "../imgs/dior-pic-3-1600.webp";
import Dior_Pic_3_800 from "../imgs/dior-pic-3-800.webp";
import Dior_Pic_3_400 from "../imgs/dior-pic-3-400.webp";
import Dolce_Gabanna_Pic_1 from "../imgs/dolce-gabanna-pic-1.webp";
import Dolce_Gabanna_Pic_1_2560 from "../imgs/dolce-gabanna-pic-1-2560.webp";
import Dolce_Gabanna_Pic_1_1600 from "../imgs/dolce-gabanna-pic-1-1600.webp";
import Dolce_Gabanna_Pic_1_800 from "../imgs/dolce-gabanna-pic-1-800.webp";
import Dolce_Gabanna_Pic_1_400 from "../imgs/dolce-gabanna-pic-1-400.webp";
import Dolce_Gabanna_Pic_2 from "../imgs/dolce-gabanna-pic-2.webp";
import Dolce_Gabanna_Pic_2_2560 from "../imgs/dolce-gabanna-pic-2-2560.webp";
import Dolce_Gabanna_Pic_2_1600 from "../imgs/dolce-gabanna-pic-2-1600.webp";
import Dolce_Gabanna_Pic_2_800 from "../imgs/dolce-gabanna-pic-2-800.webp";
import Dolce_Gabanna_Pic_2_400 from "../imgs/dolce-gabanna-pic-2-400.webp";
import Dolce_Gabanna_Pic_3 from "../imgs/dolce-gabanna-pic-3.webp";
import Dolce_Gabanna_Pic_3_2560 from "../imgs/dolce-gabanna-pic-3-2560.webp";
import Dolce_Gabanna_Pic_3_1600 from "../imgs/dolce-gabanna-pic-3-1600.webp";
import Dolce_Gabanna_Pic_3_800 from "../imgs/dolce-gabanna-pic-3-800.webp";
import Dolce_Gabanna_Pic_3_400 from "../imgs/dolce-gabanna-pic-3-400.webp";

const CollaborationSection = () => {
  const yslImages = [
    {
      src: Ysl_Pic_1,
      srcSet: `
      ${Ysl_Pic_1_400} 400w,
      ${Ysl_Pic_1_800} 800w,
      ${Ysl_Pic_1_1600} 1600w,
      ${Ysl_Pic_1_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Ysl_Pic_2,
      srcSet: `
      ${Ysl_Pic_2_400} 400w,
      ${Ysl_Pic_2_800} 800w,
      ${Ysl_Pic_2_1600} 1600w,
      ${Ysl_Pic_2_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Ysl_Pic_3,
      srcSet: `
      ${Ysl_Pic_3_400} 400w,
      ${Ysl_Pic_3_800} 800w,
      ${Ysl_Pic_3_1600} 1600w,
      ${Ysl_Pic_3_2560} 2560w
    `,
      sizes: "100vw",
    },
  ];

  const dolceGabannaImages = [
    {
      src: Dolce_Gabanna_Pic_1,
      srcSet: `
      ${Dolce_Gabanna_Pic_1_400} 400w,
      ${Dolce_Gabanna_Pic_1_800} 800w,
      ${Dolce_Gabanna_Pic_1_1600} 1600w,
      ${Dolce_Gabanna_Pic_1_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Dolce_Gabanna_Pic_2,
      srcSet: `
      ${Dolce_Gabanna_Pic_2_400} 400w,
      ${Dolce_Gabanna_Pic_2_800} 800w,
      ${Dolce_Gabanna_Pic_2_1600} 1600w,
      ${Dolce_Gabanna_Pic_2_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Dolce_Gabanna_Pic_3,
      srcSet: `
      ${Dolce_Gabanna_Pic_3_400} 400w,
      ${Dolce_Gabanna_Pic_3_800} 800w,
      ${Dolce_Gabanna_Pic_3_1600} 1600w,
      ${Dolce_Gabanna_Pic_3_2560} 2560w
    `,
      sizes: "100vw",
    },
  ];
  const diorImages = [
    {
      src: Dior_Pic_1,
      srcSet: `
      ${Dior_Pic_1_400} 400w,
      ${Dior_Pic_1_800} 800w,
      ${Dior_Pic_1_1600} 1600w,
      ${Dior_Pic_1_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Dior_Pic_2,
      srcSet: `
      ${Dior_Pic_2_400} 400w,
      ${Dior_Pic_2_800} 800w,
      ${Dior_Pic_2_1600} 1600w,
      ${Dior_Pic_2_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Dior_Pic_3,
      srcSet: `
      ${Dior_Pic_3_400} 400w,
      ${Dior_Pic_3_800} 800w,
      ${Dior_Pic_3_1600} 1600w,
      ${Dior_Pic_3_2560} 2560w
    `,
      sizes: "100vw",
    },
  ];
  const burberryImages = [
    {
      src: Burberry_Pic_1,
      srcSet: `
      ${Burberry_Pic_1_400} 400w,
      ${Burberry_Pic_1_800} 800w,
      ${Burberry_Pic_1_1600} 1600w,
      ${Burberry_Pic_1_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Burberry_Pic_2,
      srcSet: `
      ${Burberry_Pic_2_400} 400w,
      ${Burberry_Pic_2_800} 800w,
      ${Burberry_Pic_2_1600} 1600w,
      ${Burberry_Pic_2_2560} 2560w
    `,
      sizes: "100vw",
    },
    {
      src: Burberry_Pic_3,
      srcSet: `
      ${Burberry_Pic_3_400} 400w,
      ${Burberry_Pic_3_800} 800w,
      ${Burberry_Pic_3_1600} 1600w,
      ${Burberry_Pic_3_2560} 2560w
    `,
      sizes: "100vw",
    },
  ];

  return (
    <div>
      <div className="hidden h-[100dvh] w-full snap-start 2xl:flex">
        <HoverSlideShow images={dolceGabannaImages} label="DOLCE GABANNA" />
        <HoverSlideShow images={yslImages} label="YSL" />
        <HoverSlideShow images={diorImages} label="DIOR" />
        <HoverSlideShow images={burberryImages} label="BURBERRY" />
      </div>

      <div className="hidden h-[100dvh] w-full snap-start lg:flex 2xl:hidden">
        <HoverSlideShow images={dolceGabannaImages} label="DOLCE GABANNA" />
        <HoverSlideShow images={yslImages} label="YSL" />
      </div>
      <div className="hidden h-[100dvh] w-full snap-start lg:flex 2xl:hidden">
        <HoverSlideShow images={diorImages} label="DIOR" />
        <HoverSlideShow images={burberryImages} label="BURBERRY" />
      </div>

      {/* Mobile: 2 per screen */}
      <div className="flex h-[100dvh] w-full snap-start flex-col lg:hidden">
        <HoverSlideShow images={dolceGabannaImages} label="DOLCE GABANNA" />
      </div>
      <div className="flex h-[100dvh] w-full snap-start flex-col lg:hidden">
        <HoverSlideShow images={yslImages} label="YSL" />
      </div>
      <div className="flex h-[100dvh] w-full snap-start flex-col lg:hidden">
        <HoverSlideShow images={diorImages} label="DIOR" />
      </div>
      <div className="flex h-[100dvh] w-full snap-start flex-col lg:hidden">
        <HoverSlideShow images={burberryImages} label="BURBERRY" />
      </div>
    </div>
  );
};

export default CollaborationSection;
