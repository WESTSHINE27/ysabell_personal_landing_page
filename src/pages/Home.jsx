import LandingSection from "../assets/components/LandingSection";
import IntroductionSection from "../assets/components/IntroductionSection";
import ImagesAutoScrollerSection from "../assets/components/ImagesAutoScrollerSection";
import MusicPlayerSection from "../assets/components/MusicPlayerSection";
import CollaborationSection from "../assets/components/CollaborationSection";
import FashionWeekSection from "../assets/components/FashionWeekSection";
import VougeDesktopSection from "../assets/components/VougeDesktopSection";
import VougeMobileSection from "../assets/components/VougeMobileSection";

export const Home = () => {
  return (
    <div>
      <div className="scrollbar-none h-screen w-screen snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden bg-white">
        <LandingSection />
        <div className="snap-start">
          <div className="sticky top-0 z-0 flex h-[100dvh] w-full flex-col lg:flex-row div-padding div-gap">
            <IntroductionSection />
          </div>

          <div className="relative hidden h-[100dvh] w-full snap-start pt-6 lg:block">
            <VougeDesktopSection />
          </div>
          <div className="relative min-h-screen w-full snap-start pt-6 lg:hidden">
            <VougeMobileSection />
          </div>
        </div>

        <FashionWeekSection />

        <MusicPlayerSection />
        <CollaborationSection />
        <ImagesAutoScrollerSection />
      </div>
    </div>
  );
};

export default Home;
