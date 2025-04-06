import React from 'react';

interface CloseIconProps {
  color?: string;
  width?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  color = 'currentColor',
  width = '24px',
}) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* White circle background */}
      <circle cx="12" cy="12" r="11" fill="white" />
      {/* X / close lines */}
      <line
        x1="16"
        y1="8"
        x2="8"
        y2="16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="8"
        x2="16"
        y2="16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
