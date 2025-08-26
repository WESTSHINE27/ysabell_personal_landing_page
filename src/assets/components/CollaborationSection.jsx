import React from "react";
import HoverSlideShow from "../../assets/components/HoverSlideShow";
import LandingPic from "../../assets/test_resoource/landing-pic.png";
import PersonalIntroductionPic from "../../assets/test_resoource/test_personal_introduction2-removebg-preview.png";

const CollaborationSection = () => {
  return (
    <div>
      <div className="hidden md:flex snap-start h-[100dvh] w-full">
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
      {/* Mobile: 2 per screen */}
      <div className="md:hidden snap-start h-[100dvh] w-full flex flex-col">
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
      <div className="md:hidden snap-start h-[100dvh] w-full flex flex-col">
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
    </div>
  );
};

export default CollaborationSection;
