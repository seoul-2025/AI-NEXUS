import React from "react";

const articleServices = [
  {
    title: "일보 버디",
    subtitle: "단순한 아이디어도 꼼꼼한 일보로 작성\n한 단어만 입력해도 3개 기사 방향 제안",
    url: "https://b1.sedaily.ai/11",
    icon: "/images/daily.png"
  },
  {
    title: "기사 버디", 
    subtitle: "일보와 아이디어만 넣으면 기사 초안 작성\n[대괄호]로 확인 필요 사항 투명하게 표시",
    url: "https://b1.sedaily.ai/22",
    icon: "/images/article.png"
  },
  {
    title: "보도자료_기업",
    subtitle: "기업 보도자료로 기사 초안 작성\n신제품, 서비스 핵심 요약, 분기 실적 분석", 
    url: "https://w1.sedaily.ai/11",
    icon: "/images/comp.png"
  },
  {
    title: "보도자료_공공",
    subtitle: "정부, 공공기관 보도자료로 기사 초안 작성\n경제정책 영향 분석, 부동산 금융 규제 요약",
    url: "https://w1.sedaily.ai/22",
    icon: "/images/gov.png"
  },
  {
    title: "외신_영어",
    subtitle: "영문 외신 기사로 한글 기사 초안 작성\n실시간 영문 뉴스 번역, 한국 상황 맥락 추가",
    url: "https://f1.sedaily.ai/11",
    icon: "/images/en.png"
  },
  {
    title: "외신_일어",
    subtitle: "일본어 외신 뉴스로 한글 기사 초안 작성\n일본식 표현 순화, 정치 경제 용어 표준화",
    url: "https://f1.sedaily.ai/22",
    icon: "/images/ja.png"
  }
];

export const ArticleWritingCategorySection = ({ onNavigateToService = () => {} }) => {
  return (
    <section className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-8 px-4 xs:pl-[50px] xs:pr-[50px] sm:pl-[58px] sm:pr-[58px] md:pl-[64px] md:pr-[64px] lg:pl-[114px] lg:pr-[114px] pt-[50px] pb-[140px] relative self-stretch w-full justify-items-center">
      {articleServices.map((service, index) => (
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