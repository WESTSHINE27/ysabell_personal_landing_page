import HoverIcon from "../../assets/components/HoverIcon";
import InstagramIcon from "../../assets/icons/instagram-lineicon.svg";
import InstagramIconHover from "../../assets/icons/instagram-icon.svg";
import TikTokIcon from "../../assets/icons/tiktok-lineicon.svg";
import TikTokIconHover from "../../assets/icons/tiktok-icon.svg";
import YoutubeIcon from "../../assets/icons/youtube-lineicon.svg";
import YoutubeIconHover from "../../assets/icons/youtube-icon.svg";
import EmailIcon from "../../assets/icons/email-lineicon.svg";
import EmailIconHover from "../../assets/icons/email-icon.svg";
import Landing_Pic from "../../assets/imgs/landing-pic.webp";
import Landing_Pic_2560 from "../../assets/imgs/landing-pic-2560.webp";
import Landing_Pic_1600 from "../../assets/imgs/landing-pic-1600.webp";
import Landing_Pic_800 from "../../assets/imgs/landing-pic-800.webp";
import Landing_Pic_400 from "../../assets/imgs/landing-pic-400.webp";

const LandingSection = () => {
  return (
    <div className="div-padding relative h-[100dvh] w-full snap-start overflow-hidden">
      <img
        src={Landing_Pic}
        srcSet={`
                    ${Landing_Pic_400} 400w,
                    ${Landing_Pic_800} 800w,
                    ${Landing_Pic_1600} 1600w,
                    ${Landing_Pic_2560} 2560w,
                    ${Landing_Pic} 4160w
                  `}
        sizes="100vw"
        alt="Landing background"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="flex h-full items-center justify-center">
        <div className="w-fit">
          {/* Name */}
          <h1 className="font-julius text-center text-6xl text-white drop-shadow-lg sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] 2xl:text-[10rem]">
            Ysabell Tan
          </h1>
          {/* Icon div */}
          <div className="flex w-full justify-between">
            <HoverIcon
              defaultIcon={InstagramIcon}
              hoverIcon={InstagramIconHover}
              alt="Instagram Icon"
              href="https://www.instagram.com/ysabell_tan?igsh=MXQ5OXh2Nzk5bThvaA=="
            />
            <HoverIcon
              defaultIcon={TikTokIcon}
              hoverIcon={TikTokIconHover}
              alt="Tiktok Icon"
              href="https://v.douyin.com/m5WCHpJLRtQ/"
            />
            <HoverIcon
              defaultIcon={YoutubeIcon}
              hoverIcon={YoutubeIconHover}
              alt="Youtube Icon"
              href="https://www.youtube.com/@cays_media"
            />
            <HoverIcon
              defaultIcon={EmailIcon}
              hoverIcon={EmailIconHover}
              alt="Email Icon"
              href="https://www.instagram.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
