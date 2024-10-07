const MedalIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_626_54595)">
        <path
          d="M16 4V10M12 4V7V4ZM8 4V10V4Z"
          stroke="#1C1B1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18.5L9 20L9.5 16.5L7.5 14.5L10.5 14L12 11L13.5 14L16.5 14.5L14.5 16.5L15 20L12 18.5Z"
          stroke="#1C1B1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_626_54595">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MedalIcon;
