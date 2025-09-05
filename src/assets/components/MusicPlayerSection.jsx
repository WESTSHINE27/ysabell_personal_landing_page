import MusicPlayer from "../components/MusicPlayer";

const MusicPlayerSection = () => {
  return (
    <div className="flex h-[100dvh] w-full snap-start flex-col items-center justify-center bg-[#765848] lg:flex-row">
      <div className="flex h-3/5 w-full items-end justify-center pb-4 lg:h-full lg:w-1/2 lg:items-center lg:pb-0">
        <MusicPlayer />
      </div>
      <div className="flex h-2/5 w-full pt-6 pr-8 pb-6 pl-8 md:p-12 lg:h-full lg:w-1/2 lg:p-16">
        <div className="flex h-full w-full flex-col items-center text-white lg:h-full xl:w-4/5 lg:items-start lg:justify-center">
          <p className="sm-mob:text-xl text-center text-lg font-bold sm:text-xl md:text-2xl lg:mb-1 lg:text-3xl ">
            About Me
          </p>
          <p className="sm-mob:text-base text-center text-sm sm:text-base md:text-lg lg:text-justify lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            elusmod tempor incididuntt labore et lolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerSection;
