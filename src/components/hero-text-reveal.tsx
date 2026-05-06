import { motion } from "framer-motion";

interface HeroTextRevealProps {
  name: string;
  role: string;
  summary: string;
}

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export function HeroTextReveal({ name, role, summary }: HeroTextRevealProps) {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <div className="overflow-hidden mb-4">
        <motion.p
          variants={lineVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="font-mono text-sm uppercase tracking-widest text-bg-base border-4 border-black inline-block w-fit px-3 py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-accent"
        >
          {role}
        </motion.p>
      </div>

      <div className="overflow-hidden mb-1">
        <motion.h1
          variants={lineVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="font-heading bg-bg-base inline px-2 leading-[1.15] box-decoration-clone"
        >
          {firstName}
        </motion.h1>
      </div>

      <div className="overflow-hidden mb-4">
        <motion.h1
          variants={lineVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="font-heading inline px-2 leading-[1.15] box-decoration-clone text-transparent"
          style={{ WebkitTextStroke: "3px #1e1e1e" }}
        >
          {lastName}
        </motion.h1>
      </div>

      <div className="overflow-hidden mb-8">
        <motion.p
          variants={lineVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="text-fluid-body font-body text-border-dark bg-bg-base border-4 border-black px-5 py-4 max-w-lg leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {summary}
        </motion.p>
      </div>
    </motion.div>
  );
}
