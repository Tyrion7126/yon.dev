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

      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="sr-only">Skills</h2>
          <div className="flex flex-wrap items-end gap-1 mb-10 select-none">
            {[
              { char: "S", id: "s1" },
              { char: "K", id: "k" },
              { char: "I", id: "i" },
              { char: "L", id: "l1" },
              { char: "L", id: "l2" },
              { char: "S", id: "s2" },
            ].map(({ char, id }, i) => {
              const colors = ["bg-bg-base", "bg-accent", "bg-primary", "bg-secondary"];
              const rotations = [
                "-rotate-3",
                "rotate-2",
                "-rotate-1",
                "rotate-3",
                "rotate-1",
                "-rotate-2",
              ];
              return (
                <span
                  key={id}
                  className={`${colors[i % colors.length]} ${rotations[i % rotations.length]} font-heading text-[clamp(1.5rem,5vw,4.5rem)] font-black leading-none border-2 md:border-4 border-black px-2 py-1 md:px-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block`}
                >
                  {char}
                </span>
              );
            })}
            <span className="font-mono text-xs border-4 border-black bg-bg-base px-3 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ml-4 self-center">
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
      </div>
    </section>
  );
}
