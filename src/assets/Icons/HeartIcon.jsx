import React from "react";

const HeartIcon = ({ width = 24, height = 24, fillColor = "white", fillOpacity = "0.5", strokeColor = "#48464A" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_6133_7562)">
        <path
          d="M21.1721 12.4854L12.0102 21.5594L2.84826 12.4854C2.24395 11.8973 1.76794 11.1905 1.45021 10.4095C1.13248 9.62841 0.979915 8.79003 1.00212 7.94711C1.02432 7.10419 1.22081 6.275 1.57922 5.51176C1.93763 4.74851 2.45019 4.06774 3.08462 3.51231C3.71905 2.95689 4.46162 2.53884 5.26555 2.28449C6.06949 2.03015 6.91738 1.94502 7.75583 2.03446C8.59429 2.1239 9.40514 2.38598 10.1373 2.80419C10.8695 3.2224 11.5072 3.78768 12.0102 4.46444C12.5153 3.7926 13.1538 3.23225 13.8854 2.81848C14.6171 2.40471 15.4263 2.14642 16.2624 2.05977C17.0985 1.97312 17.9435 2.05999 18.7445 2.31492C19.5455 2.56986 20.2853 2.98739 20.9175 3.54137C21.5497 4.09534 22.0607 4.77385 22.4186 5.53442C22.7766 6.29499 22.9736 7.12126 22.9975 7.9615C23.0214 8.80174 22.8716 9.63786 22.5575 10.4176C22.2434 11.1972 21.7718 11.9037 21.1721 12.4927"
          fill={fillColor}
          fillOpacity={fillOpacity}
        />
        <path
          d="M21.1721 12.4854L12.0102 21.5594L2.84826 12.4854C2.24395 11.8973 1.76794 11.1905 1.45021 10.4095C1.13248 9.62841 0.979915 8.79003 1.00212 7.94711C1.02432 7.10419 1.22081 6.275 1.57922 5.51176C1.93763 4.74851 2.45019 4.06774 3.08462 3.51231C3.71905 2.95689 4.46162 2.53884 5.26555 2.28449C6.06949 2.03015 6.91738 1.94502 7.75583 2.03446C8.59429 2.1239 9.40514 2.38598 10.1373 2.80419C10.8695 3.2224 11.5072 3.78768 12.0102 4.46444C12.5153 3.7926 13.1538 3.23225 13.8854 2.81848C14.6171 2.40471 15.4263 2.14642 16.2624 2.05977C17.0985 1.97312 17.9435 2.05999 18.7445 2.31492C19.5455 2.56986 20.2853 2.98739 20.9175 3.54137C21.5497 4.09534 22.0607 4.77385 22.4186 5.53442C22.7766 6.29499 22.9736 7.12126 22.9975 7.9615C23.0214 8.80174 22.8716 9.63786 22.5575 10.4176C22.2434 11.1972 21.7718 11.9037 21.1721 12.4927"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6133_7562">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(HeartIcon);
