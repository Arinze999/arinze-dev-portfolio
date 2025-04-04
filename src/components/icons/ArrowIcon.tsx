// ArrowIcon.tsx
import React from "react";

interface ArrowIconProps {
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: number;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  width = "64",
  height = "64",
  color = "#f7f7f7", // matches the near-white color in image
  strokeWidth = 8,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="8"
        y1="8"
        x2="56"
        y2="32"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1="56"
        y1="32"
        x2="32"
        y2="56"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowIcon;
