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
      <div className="scrollbar-none h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-white">
        <LandingSection />
        <div className="snap-start">
          <div className="sticky top-0 z-0 flex h-[100dvh] w-full flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8 md:gap-6 md:px-8 md:py-12 lg:flex-row lg:gap-8 lg:px-12 lg:py-16 xl:gap-12">
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
