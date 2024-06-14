import React from "react";

const HelpIcon = ({ width = 24, height = 24}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_6092_7103)">
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke="#313033"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17V17.01"
          stroke="#313033"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.5002C11.9816 13.1755 12.0692 12.8537 12.2495 12.5832C12.4299 12.3126 12.6933 12.108 13 12.0002C13.3759 11.8564 13.7132 11.6274 13.9856 11.3311C14.2579 11.0348 14.4577 10.6794 14.5693 10.2928C14.6809 9.90612 14.7013 9.49886 14.6287 9.10303C14.5562 8.7072 14.3928 8.33362 14.1513 8.01168C13.9099 7.68974 13.597 7.42825 13.2373 7.24778C12.8776 7.06732 12.4809 6.97281 12.0785 6.97169C11.6761 6.97057 11.2789 7.06288 10.9182 7.24135C10.5576 7.41982 10.2432 7.67957 10 8.00017"
          stroke="#313033"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6092_7103">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(HelpIcon);