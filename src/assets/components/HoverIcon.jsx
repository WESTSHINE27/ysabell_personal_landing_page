import React from "react";

const HoverIcon = ({
  defaultIcon,
  hoverIcon,
  alt = "icon",
  href = null,
}) => {
  const iconContent = (
    <div
      className="relative size-16 sm:size-18 md:size-24 lg:size-32"
     
    >
      <img
        src={defaultIcon}
        alt={alt}
        className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 hover:opacity-0"
      />
      <img
        src={hoverIcon}
        alt={alt}
        className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100"
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
