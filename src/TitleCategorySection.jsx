import React from "react";

const titleServices = [
  {
    title: "제목 생성_5종",
    subtitle: "클릭우드형 등 5가지 유형별 차별화\n저널리즘 충실형, 균형잡힌 후킹형 등",
    url: "https://t1.sedaily.ai/11",
    icon: "/images/title.png"
  },
  {
    title: "제목 찾기_7종", 
    subtitle: "언어 혁신, 충돌 생성, 감성 증폭 엔진\n7가지 엔진으로 새로운 아이디어 제시",
    url: "https://t1.sedaily.ai/22",
    icon: "/images/creative.png"
  }
];

export const TitleCategorySection = ({ onNavigateToService = () => {} }) => {
  return (
    <section className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-8 px-4 xs:pl-[50px] xs:pr-[50px] sm:pl-[58px] sm:pr-[58px] md:pl-[64px] md:pr-[64px] lg:pl-[114px] lg:pr-[114px] pt-[50px] pb-[220px] relative self-stretch w-full justify-items-center">
      {titleServices.map((service, index) => (
        <article
          key={index}
          onClick={() => window.open(service.url, '_blank')}
          className="w-full h-[140px] flex items-center gap-4 p-6 overflow-hidden border-[0.5px] border-solid border-[#0000001a] shadow-[0px_5px_19px_#00000014,0px_0px_4.4px_#0000000f] hover:shadow-[0px_10px_30px_#00000020,0px_0px_8px_#00000015] hover:-translate-y-1 transition-all duration-300 ease-out bg-white rounded-2xl cursor-pointer"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center px-1">
            <img 
              src={service.icon} 
              alt={service.title}
              className="w-12 h-12 object-contain"
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