import React, { FC } from "react";

interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const Image: FC<ImageProps> = ({ src, alt, width, height, className, onClick, ...attrs}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={`${width}px`}
      height={`${height}px`}
      className={className}
      onClick={onClick}
      {...attrs}
    />
  );
};

export default Image;
