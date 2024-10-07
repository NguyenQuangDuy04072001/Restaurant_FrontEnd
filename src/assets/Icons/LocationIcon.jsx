import React from "react";

const LocationIcon = ({ width = 20, height = 20}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_634_60558)">
        <path
          d="M3.33203 6.66634V4.99967C3.33203 4.55765 3.50763 4.13372 3.82019 3.82116C4.13275 3.5086 4.55667 3.33301 4.9987 3.33301H6.66536"
          stroke="#48464A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33203 13.333V14.9997C3.33203 15.4417 3.50763 15.8656 3.82019 16.1782C4.13275 16.4907 4.55667 16.6663 4.9987 16.6663H6.66536"
          stroke="#48464A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.332 3.33301H14.9987C15.4407 3.33301 15.8646 3.5086 16.1772 3.82116C16.4898 4.13372 16.6654 4.55765 16.6654 4.99967V6.66634"
          stroke="#48464A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.332 16.6663H14.9987C15.4407 16.6663 15.8646 16.4907 16.1772 16.1782C16.4898 15.8656 16.6654 15.4417 16.6654 14.9997V13.333"
          stroke="#48464A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 9.16699V9.17533"
          stroke="#48464A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0013 15.0005L7.08464 10.8338C6.80386 10.3263 6.66035 9.75437 6.66828 9.17446C6.67621 8.59454 6.83532 8.02673 7.12987 7.52713C7.42442 7.02753 7.84423 6.61342 8.34782 6.32573C8.8514 6.03804 9.42133 5.88672 10.0013 5.88672C10.5813 5.88672 11.1512 6.03804 11.6548 6.32573C12.1584 6.61342 12.5782 7.02753 12.8727 7.52713C13.1673 8.02673 13.3264 8.59454 13.3343 9.17446C13.3423 9.75437 13.1987 10.3263 12.918 10.8338L10.0013 15.0005Z"
          stroke="#48464A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_634_60558">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(LocationIcon);
