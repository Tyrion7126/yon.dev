import {
  BrutalistStar,
  BrutalistStarLarge,
  CircleDoodle,
  HandDrawnArrow,
} from "./decorative-shapes";

export const HeroDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <BrutalistStar className="absolute top-16 right-[25%] hidden lg:block opacity-80" />
      <BrutalistStarLarge className="absolute bottom-24 left-[8%] hidden lg:block opacity-60" />
      <CircleDoodle className="absolute top-[30%] right-[5%] hidden md:block opacity-70" />
      <HandDrawnArrow className="absolute bottom-32 left-[35%] hidden lg:block rotate-12 opacity-70" />
      <div className="absolute top-[20%] left-[3%] w-8 h-8 border-4 border-black bg-secondary rotate-12 hidden md:block" />
      <div className="absolute bottom-[15%] right-[10%] w-6 h-6 border-4 border-black bg-primary rotate-45 hidden md:block" />
    </div>
  );
};
