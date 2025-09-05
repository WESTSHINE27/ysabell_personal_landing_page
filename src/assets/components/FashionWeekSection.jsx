import FashionWeekMobileSection from "./FashionWeekMobileSection";
import FashionWeekDesktopSection from "./FashionWeekDesktopSection";

const FashionWeekSection = () => {

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden">
        <FashionWeekMobileSection />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <FashionWeekDesktopSection />
      </div>
    </>
  );
};

export default FashionWeekSection;
