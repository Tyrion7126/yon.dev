import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { type ReactNode, useCallback, useEffect, useRef } from "react";
import { cn } from "../lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog({ open, onClose, children }: DialogProps) {
  return (
    <AnimatePresence>
      {open && <DialogPortal onClose={onClose}>{children}</DialogPortal>}
    </AnimatePresence>
  );
}

function DialogPortal({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      onKeyDown={handleKeyDown}
    >
      <DialogOverlay onClose={onClose} />
      <motion.div
        ref={contentRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        initial={{ scale: 0.85, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function DialogOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="presentation"
    />
  );
}

interface DialogContentProps {
  children: ReactNode;
  className?: string;
  accent?: string;
}

export function DialogContent({ children, className, accent }: DialogContentProps) {
  return (
    <div
      className={cn(
        "bg-bg-base border-4 border-black rounded-none",
        "shadow-[12px_12px_0px_0px_rgba(30,30,30,1)]",
        "max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8",
        className,
      )}
      style={accent ? { borderTopColor: accent, borderTopWidth: "6px" } : undefined}
    >
      {children}
    </div>
  );
}

interface DialogCloseProps {
  onClose: () => void;
  className?: string;
}

export function DialogClose({ onClose, className }: DialogCloseProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      className={cn(
        "absolute top-4 right-4 w-14 h-14 flex items-center justify-center",
        "border-4 border-black bg-bg-base",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "hover:bg-primary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
        "transition-all duration-100",
        "focus-visible:outline-3 focus-visible:outline-dashed focus-visible:outline-secondary",
        className,
      )}
      aria-label="Close dialog"
    >
      <X size={28} strokeWidth={3} />
    </button>
  );
}
