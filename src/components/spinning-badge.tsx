export const SpinningBadge = () => {
  return (
    <div className="w-28 h-28 md:w-36 md:h-36 animate-spin-slow select-none pointer-events-none">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        role="img"
        aria-label="4+ years experience badge"
      >
        <defs>
          <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <circle cx="100" cy="100" r="90" fill="#FFC900" stroke="#1e1e1e" strokeWidth="6" />
        <circle cx="100" cy="100" r="60" fill="#faf9f6" stroke="#1e1e1e" strokeWidth="4" />
        <text className="font-mono" fontSize="14" fontWeight="bold" fill="#1e1e1e">
          <textPath href="#circlePath" startOffset="0%">
            4+ YEARS EXPERIENCE • DEPLOYING SCALE • ZERO COMPROMISE •
          </textPath>
        </text>
        <text
          x="100"
          y="105"
          textAnchor="middle"
          className="font-heading"
          fontSize="28"
          fontWeight="bold"
          fill="#1e1e1e"
        >
          FSR
        </text>
      </svg>
    </div>
  );
};
