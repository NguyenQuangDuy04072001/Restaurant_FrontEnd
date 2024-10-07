const AlarmIcon = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_650_53451)">
                <path d="M12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20Z" stroke="#605D62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 10V13H14" stroke="#605D62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 4L4.25 6" stroke="#605D62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 4L19.75 6" stroke="#605D62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_650_53451">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default AlarmIcon;