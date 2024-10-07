import React from "react";

const WritingIcon = ({ width = 24, height = 24, color = "#DB242D" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_1003_68795)">
        <path
          d="M20 17V5C20 3.879 19.121 3 18 3C16.879 3 16 3.879 16 5V17L18 19L20 17Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7H20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17C3 16.4696 3.21071 15.9609 3.58579 15.5858C3.96086 15.2107 4.46957 15 5 15H9C9.53043 15 10.0391 14.7893 10.4142 14.4142C10.7893 14.0391 11 13.5304 11 13C11 12.4696 10.7893 11.9609 10.4142 11.5858C10.0391 11.2107 9.53043 11 9 11H6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1003_68795">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(WritingIcon);
