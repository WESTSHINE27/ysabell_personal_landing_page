import React from "react";

import MusicPlayer from "../components/MusicPlayer";

const MusicPlayerSection = () => {
  return (
    <div className="snap-start h-[100dvh] w-full flex justify-center items-center bg-[#765848] flex-col md:flex-row ">
      <div className="flex items-end justify-center md:items-center h-3/5 md:h-full w-full md:w-1/2 pb-4 md:pb-0">
        <MusicPlayer />
      </div>
      <div className="flex h-2/5 md:h-full w-full md:w-1/2 flex-col items-center md:items-start md:justify-center text-white pt-6 pb-6 pl-8 pr-8 md:p-12 lg:p-16">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold md:mb-1 text-center">
          About Me
        </p>
        <p className="text-center md:text-justify text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
          elusmod tempor incididuntt labore et lolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
      </div>
    </div>
  );
};

export default MusicPlayerSection;
