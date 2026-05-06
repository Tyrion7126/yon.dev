import { motion } from "framer-motion";

export function BrutalistStar({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0L46.5 30.5L80 40L46.5 49.5L40 80L33.5 49.5L0 40L33.5 30.5L40 0Z"
        fill="#FF90E8"
        stroke="black"
        strokeWidth="4"
      />
    </motion.svg>
  );
}

export function BrutalistStarLarge({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      animate={{ rotate: -360 }}
      transition={{
        duration: 30,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      className={className}
      width="120"
      height="120"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0L46.5 30.5L80 40L46.5 49.5L40 80L33.5 49.5L0 40L33.5 30.5L40 0Z"
        fill="#FFC900"
        stroke="black"
        strokeWidth="4"
      />
    </motion.svg>
  );
}

export function HandDrawnArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="140"
      height="60"
      viewBox="0 0 140 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 45C25 50 55 48 85 35C95 30 105 24 115 18"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 8L118 17L105 30"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ZigzagLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="20"
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 10L10 2L20 18L30 2L40 18L50 2L60 18L70 2L80 18L90 2L100 18L110 2L120 18L130 2L140 18L150 2L160 18L170 2L180 18L190 2L200 10"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleDoodle({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="26" stroke="black" strokeWidth="4" fill="#23A094" />
      <circle cx="30" cy="30" r="12" stroke="black" strokeWidth="3" fill="none" />
    </motion.svg>
  );
}
