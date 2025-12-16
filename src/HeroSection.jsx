import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex flex-col w-full items-start gap-4 pl-[70px] pr-4 pt-8 pb-0 relative flex-[0_0_auto]">
      <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#0000008c] text-xl tracking-[-0.10px] leading-[29.0px] whitespace-nowrap">
        AI NEXUS의 대표 카테고리
      </p>

      <h1 className="w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-5xl tracking-[-0.96px] leading-[57.6px] whitespace-nowrap relative flex items-center justify-center text-black">
        카테고리별 서비스
      </h1>
    </section>
  );
};