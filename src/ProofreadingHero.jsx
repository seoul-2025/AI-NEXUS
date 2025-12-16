import React from "react";

export const ProofreadingHero = () => {
  return (
    <section 
      className="flex min-h-[35px] md:h-[235px] lg:h-[388px] bg-cover bg-[50%_50%] flex-col justify-end items-start relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c1445 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      <div className="inline-flex gap-4 flex-col items-start relative px-[50px] sm:px-[58px] md:px-[64px] lg:px-[114px] pb-8">
        <h1 className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-[51px] text-left tracking-[-1.28px] leading-tight md:leading-[57px] lg:leading-[57.4px] px-4">
          퇴고 · 교열
        </h1>

        <p className="relative flex items-center justify-start w-full max-w-[960px] px-4 [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff90] text-base md:text-xl lg:text-lg text-left tracking-[-0.12px] leading-relaxed md:leading-[35px] lg:leading-[30.6px]">
          AI가 문체와 맞춤법을 완벽하게 다듬는 4가지 도구
        </p>
      </div>
    </section>
  );
};