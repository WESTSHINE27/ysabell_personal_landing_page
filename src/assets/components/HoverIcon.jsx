import React from 'react';

const HoverIcon = ({ defaultIcon, hoverIcon, alt = 'icon', href = null, size = 64 }) => {
  const dimensionClass = `w-[${size}px] h-[${size}px]`; // Tailwind does not support dynamic class names, so we use inline styles instead

  const iconContent = (
    <div
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
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
