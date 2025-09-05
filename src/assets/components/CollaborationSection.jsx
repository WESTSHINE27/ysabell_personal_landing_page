import React from "react";
import HoverSlideShow from "../../assets/components/HoverSlideShow";
import LandingPic from "../../assets/test_resoource/landing-pic.png";
import PersonalIntroductionPic from "../../assets/test_resoource/test_personal_introduction2-removebg-preview.png";
const CollaborationSection = () => {
  return (
    <div>
      <div className="hidden h-[100dvh] w-full snap-start 2xl:flex">
        <HoverSlideShow
          images={[
            LandingPic,
            PersonalIntroductionPic,
            LandingPic,
            PersonalIntroductionPic,
          ]}
          label="PUMA"
        />
        <HoverSlideShow
          images={[
            LandingPic,
            PersonalIntroductionPic,
            LandingPic,
            PersonalIntroductionPic,
          ]}
          label="PUMA"
        />
        <HoverSlideShow
          images={[
            LandingPic,
            PersonalIntroductionPic,
            LandingPic,
            PersonalIntroductionPic,
          ]}
          label="PUMA"
        />
        <HoverSlideShow
          images={[
            LandingPic,
            PersonalIntroductionPic,
            LandingPic,
            PersonalIntroductionPic,
          ]}
          label="PUMA"
        />
      </div>

      <div className="hidden h-[100dvh] w-full snap-start lg:flex 2xl:hidden">
        <HoverSlideShow
          images={[
            LandingPic,
            PersonalIntroductionPic,
            LandingPic,
            PersonalIntroductionPic,
          ]}
          label="PUMA"
        />
        <HoverSlideShow
          images={[
            LandingPic,
            PersonalIntroductionPic,
            LandingPic,
            PersonalIntroductionPic,
          ]}
          label="PUMA"
        />
      </div>

      {/* Mobile: 2 per screen */}
      <div className="flex h-[100dvh] w-full snap-start flex-col lg:hidden">
        <HoverSlideShow
          images={[
            LandingPic,
            PersonalIntroductionPic,
            LandingPic,
            PersonalIntroductionPic,
          ]}
          label="PUMA"
        />
      </div>
    </div>
  );
};

export default CollaborationSection;
