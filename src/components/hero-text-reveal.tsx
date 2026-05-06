import { motion } from "framer-motion";

interface HeroTextRevealProps {
  name: string;
  role: string;
}

const lineVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export function HeroTextReveal({ name, role }: HeroTextRevealProps) {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative wrap-break-word"
    >
      {/* First name — highlight tape on pink */}
      <div className="overflow-hidden -mb-1 md:mb-[-1rem]">
        <motion.h1
          variants={lineVariants}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="font-heading text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tighter"
        >
          <span className="bg-primary border-2 md:border-4 border-black px-2 md:px-4 inline-block">
            {firstName}
          </span>
        </motion.h1>
      </div>

      {/* Last name — solid white block, overlapping */}
      <div className="overflow-hidden mb-3 md:mb-4">
        <motion.h1
          variants={lineVariants}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="font-heading text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tighter"
        >
          <span className="bg-bg-base border-2 md:border-4 border-black px-2 md:px-4 inline-block">
            {lastName}
          </span>
        </motion.h1>
      </div>

      {/* Role — massive outlined text, responsive stroke */}
      <div className="overflow-hidden">
        <motion.p
          variants={lineVariants}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="font-heading text-[clamp(1.2rem,3.5vw,3.5rem)] leading-none tracking-tight text-transparent uppercase font-bold [&]:[-webkit-text-stroke:1px_#1e1e1e] md:[&]:[-webkit-text-stroke:2px_#1e1e1e] lg:[&]:[-webkit-text-stroke:3px_#1e1e1e]"
        >
          {role}
        </motion.p>
      </div>
    </motion.div>
  );
}
