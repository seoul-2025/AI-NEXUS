import React from "react";

const aiToolsServices = [
  {
    title: "ChatGPT",
    subtitle: "일상 업무의 만능 AI - 무엇이든 물어보세요\n일상 업무 지원, 창작 도움",
    url: "https://m1.sedaily.ai/login?redirect=%2Fg&model=gpt",
    icon: "/images/GPT.png",
    bgColor: "bg-[#10A37F]"
  },
  {
    title: "Claude", 
    subtitle: "논리적 글쓰기 전문가 - 깊이 있는 분석\n논리적 분석, 전문 글쓰기",
    url: "https://m1.sedaily.ai/login?redirect=%2Fc&model=claude",
    icon: "/images/Claude.png",
    bgColor: "bg-[#D97706]"
  },
  {
    title: "Perplexity",
    subtitle: "실시간 검색 전문가 - 최신 정보 제공\n실시간 검색, 최신 정보",
    url: "https://m1.sedaily.ai/login?redirect=%2Fp&model=perplexity",
    icon: "/images/Perplexity.png",
    bgColor: "bg-[#1FB6FF]"
  }
];

export const AIToolsCategorySection = ({ onNavigateToService = () => {} }) => {
  return (
    <section className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-8 px-4 xs:pl-[50px] xs:pr-[50px] sm:pl-[58px] sm:pr-[58px] md:pl-[64px] md:pr-[64px] lg:pl-[114px] lg:pr-[114px] pt-[50px] pb-[220px] relative self-stretch w-full justify-items-center">
      {aiToolsServices.map((service, index) => (
        <article
          key={index}
          onClick={() => window.open(service.url, '_blank')}
          className="w-full h-[140px] flex items-center gap-4 p-6 overflow-hidden border-[0.5px] border-solid border-[#0000001a] shadow-[0px_5px_19px_#00000014,0px_0px_4.4px_#0000000f] hover:shadow-[0px_10px_30px_#00000020,0px_0px_8px_#00000015] hover:-translate-y-1 transition-all duration-300 ease-out bg-white rounded-2xl cursor-pointer"
        >
          <div className={`flex-shrink-0 w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center px-1`}>
            <img 
              src={service.icon} 
              alt={service.title}
              className="w-12 h-12 object-contain filter brightness-110 contrast-110"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="[font-family:'Inter-Bold',Helvetica] font-bold text-black text-2xl tracking-[-0.48px] leading-[28.8px] mb-2">
              {service.title}
            </h2>
            <p className="[font-family:'Inter-Light',Helvetica] font-light text-gray-600 text-base tracking-[-0.32px] leading-[23.2px] line-clamp-2 whitespace-pre-line">
              {service.subtitle}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};