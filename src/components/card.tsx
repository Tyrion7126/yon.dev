import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  accent?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-bg-base border-4 border-black rounded-none",
          "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
          "transition-all duration-150 ease-in-out",
          className,
        )}
        style={{
          ...style,
          ...(accent ? { borderTopColor: accent, borderTopWidth: "6px" } : {}),
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 pb-3", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-3", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";
