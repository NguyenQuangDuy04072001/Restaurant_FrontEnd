import React from "react";

const StarIcon = ({ width = 16, height = 16, color = "#DB242D" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_1003_68797)">
        <path
          d="M7.99794 11.8336L3.88327 13.997L4.66927 9.41496L1.33594 6.17029L5.93594 5.50363L7.99327 1.33496L10.0506 5.50363L14.6506 6.17029L11.3173 9.41496L12.1033 13.997L7.99794 11.8336Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1003_68797">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(StarIcon);
