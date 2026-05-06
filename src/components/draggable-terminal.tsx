import { motion } from "framer-motion";
import { terminalStack } from "../data/portfolio-data";

export function DraggableTerminal() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{
        scale: 1.02,
        boxShadow: "16px 16px 0px 0px rgba(30,30,30,1)",
        cursor: "grabbing",
      }}
      className="absolute right-4 md:right-8 bottom-[-5%] md:bottom-10 w-[340px] md:w-[400px] border-4 border-black bg-border-dark text-bg-base overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-grab z-30"
    >
      {/* Window 95-style title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-secondary border-b-4 border-black">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-black uppercase tracking-wider">
            ~/daily-stack
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 border-2 border-black bg-bg-base flex items-center justify-center">
            <span className="text-[8px] font-bold leading-none">_</span>
          </div>
          <div className="w-4 h-4 border-2 border-black bg-bg-base flex items-center justify-center">
            <span className="text-[8px] font-bold leading-none">□</span>
          </div>
          <div className="w-4 h-4 border-2 border-black bg-primary flex items-center justify-center">
            <span className="text-[8px] font-bold leading-none">×</span>
          </div>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-sm space-y-1.5 bg-border-dark">
        {terminalStack.map((line) => (
          <p key={line} className="text-bg-base leading-relaxed">
            {line}
          </p>
        ))}
        <p className="text-accent animate-pulse mt-3">▊</p>
      </div>

      {/* Bottom grab indicator */}
      <div className="px-3 py-1.5 border-t-2 border-bg-base/20 bg-border-dark">
        <span className="font-mono text-[9px] text-bg-base/40 uppercase tracking-widest">
          drag me
        </span>
      </div>
    </motion.div>
  );
}
