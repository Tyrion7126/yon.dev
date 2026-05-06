import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "../data/portfolio-data";

const tagColors = ["bg-primary", "bg-secondary", "bg-accent", "bg-bg-base"];

function getRandomRotation() {
  return Math.floor(Math.random() * 16 - 8);
}

interface SkillTagProps {
  skill: string;
  index: number;
  color: string;
}

function SkillTag({ skill, index, color }: SkillTagProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      drag
      dragMomentum
      dragElastic={0.2}
      whileDrag={{
        scale: 1.1,
        rotate: 5,
        boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
        zIndex: 999,
      }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      style={{
        x,
        y,
        rotate: getRandomRotation(),
      }}
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: index * 0.02,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`${color} border-4 border-black px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-grab active:cursor-grabbing select-none touch-none`}
    >
      <span className="font-mono text-sm font-bold whitespace-nowrap">{skill}</span>
    </motion.div>
  );
}

export function SkillsChaos() {
  const constraintRef = useRef<HTMLDivElement>(null);
  const { skills } = portfolioData;
  const allItems = skills.flatMap((s) => s.items);

  return (
    <section id="skills" className="bg-secondary border-b-4 border-black relative">
      <div className="absolute top-4 left-6 font-mono text-xs text-black/40 select-none pointer-events-none">
        {'<section id="skills">'}
      </div>
      <div className="absolute bottom-4 right-6 font-mono text-xs text-black/40 select-none pointer-events-none">
        {"</section>"}
      </div>

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-heading">Skills</h2>
          <span className="font-mono text-xs border-4 border-black bg-bg-base px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            DRAG TO REARRANGE
          </span>
        </div>

        <div
          ref={constraintRef}
          className="relative min-h-[500px] border-4 border-black bg-bg-base shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 overflow-hidden"
        >
          <div className="flex flex-wrap gap-4 items-start">
            {allItems.map((skill, i) => (
              <SkillTag
                key={skill}
                skill={skill}
                index={i}
                color={tagColors[i % tagColors.length]}
              />
            ))}
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-black/30 select-none pointer-events-none">
            {allItems.length} items · framer-motion physics
          </div>
        </div>
      </div>
    </section>
  );
}
