import React from 'react';

interface ScrewIconProps {
  width?: string;
  color?: string;
}

const ScrewIcon: React.FC<ScrewIconProps> = ({
  width = '24px',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon representing the bolt head */}
      <polygon fill={color} points="18,12 15,17 9,17 6,12 9,7 15,7" />
      {/* Inner circle for the screw head (with subtle gray fill) */}
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="#e0e0e0"
        stroke={color}
        strokeWidth="0.5"
      />
      {/* Slot details: vertical and horizontal rectangles forming a plus sign */}
      <rect x="11" y="10" width="2" height="4" fill={color} />
      <rect x="10" y="11" width="4" height="2" fill={color} />
    </svg>
  );
};

export default ScrewIcon;
