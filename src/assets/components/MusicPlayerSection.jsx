import MusicPlayer from "../components/MusicPlayer";

const MusicPlayerSection = () => {
  return (
    <div className="flex h-[100dvh] w-full snap-start flex-col items-center justify-center bg-[#765848] lg:flex-row">
      <div className="flex h-3/5 w-full items-end justify-center pb-4 lg:h-full lg:w-1/2 lg:items-center lg:pb-0">
        <MusicPlayer />
      </div>
      <div className="flex h-2/5 w-full pt-6 pr-8 pb-6 pl-8 md:p-12 lg:h-full lg:w-1/2 lg:p-16">
        <div className="flex h-full w-full flex-col items-center text-white lg:h-full lg:items-start lg:justify-center xl:w-4/5">
          <p className="sm-mob:text-xl text-center text-lg font-bold sm:text-xl md:text-2xl lg:mb-1 lg:text-3xl">
            About Me
          </p>
          <p className="sm-mob:text-base text-center text-sm sm:text-base md:text-lg lg:text-justify lg:text-xl">
            I’ve loved singing since I was a child — spending my after-school
            time listening to music and singing along. Growing up, I joined
            school competitions and gained confidence from the experiences. Now,
            I enjoy learning and covering songs I love, especially trending
            ones, and I dream of building a music career in the future. Thank
            you for listening and being part of my journey — your support means
            the world to me!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerSection;
