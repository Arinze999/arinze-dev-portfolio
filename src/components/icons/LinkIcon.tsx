import React from 'react';

interface LinkIconProps {
  color?: string;
  width?: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({
  color = 'currentColor',
  width = '24px',
}) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.657-5.657l1.414-1.414
           m4.95-4.95a4 4 0 015.657 5.657l-1.414 1.414a4 4 0 01-5.657-5.657l1.414-1.414z"
      />
    </svg>
  );
};

export default LinkIcon;
