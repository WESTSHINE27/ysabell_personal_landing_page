import React from "react";

const HoverIcon = ({ defaultIcon, hoverIcon, alt = "icon", href = null }) => {
  const iconContent = (
    <div className="group relative size-16 sm:size-18 md:size-24 lg:size-32 xl:size-36 2xl:size-42">
      {/* Default Icon */}
      <img
        src={defaultIcon}
        alt={alt}
        className="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      />
      {/* Hover Icon */}
      <img
        src={hoverIcon}
        alt={alt}
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {iconContent}
    </a>
  ) : (
    iconContent
  );
};

export default HoverIcon;
