import React from "react";

const pricingCards = [
  {
    title: "기사 작성 · 생성",
  },
  {
    title: "퇴고 · 교열",
  },
  {
    title: "제목 생성",
  },
  {
    title: "AI 도구",
  },
];

export const ProofreadingCategorySection = ({ onNavigateToService = () => {} }) => {
  return (
    <section className="grid grid-cols-1 min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3 gap-8 px-[50px] sm:px-[58px] md:px-[64px] lg:px-[114px] pt-[50px] pb-[100px] relative self-stretch w-full justify-items-center">
      {pricingCards.map((card, cardIndex) => (
        <article
          key={cardIndex}
          className="w-full h-auto min-h-[200px] gap-8 overflow-hidden border-[0.5px] border-solid border-[#0000001a] shadow-[0px_5px_19px_#00000014,0px_0px_4.4px_#0000000f] hover:shadow-[0px_10px_30px_#00000020,0px_0px_8px_#00000015] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-start pt-[52px] pb-6 px-4 sm:px-6 relative bg-white rounded-2xl cursor-pointer"
        >
          <header className="flex items-baseline gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative flex items-center justify-start w-fit mt-[-1.00px] ml-1 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl lg:text-[44px] tracking-[-0.80px] leading-[44.0px] whitespace-nowrap">
              {card.title}
            </h2>
          </header>
        </article>
      ))}
    </section>
  );
};