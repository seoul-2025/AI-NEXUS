import React from "react";

const editingServices = [
  {
    title: "퇴고_단문 (1,000자 미만)",
    subtitle: "문맥의 첫 2초 임팩트를 이탈률 50% 감소\n3가지 개선 방향 제시, 번호로 즉시 선택",
    url: "https://r1.sedaily.ai/11",
    icon: "/images/quick.png"
  },
  {
    title: "퇴고_장문 (1,000자 이상)", 
    subtitle: "독자 이탈 포인트 예측, 구조 재배치 제안\n영웅서사/미스터리/플래시백 구조 선택",
    url: "https://r1.sedaily.ai/22",
    icon: "/images/deep.png"
  },
  {
    title: "교열_경제분야",
    subtitle: "숫자, 단위 표기 등 맞춤법 완벽 체크\n주어-서술어 호응 검증, 중복 표현 제거", 
    url: "https://p1.sedaily.ai/11",
    icon: "/images/biz.png"
  },
  {
    title: "교열_사회분야",
    subtitle: "인용 부호 정확성, 간접 인용 문법 체크\n불필요한 피동문 개선, 문단 간 연결성 검토",
    url: "https://p1.sedaily.ai/22",
    icon: "/images/edit.png"
  }
];

export const EditingCategorySection = ({ onNavigateToService = () => {} }) => {
  return (
    <section className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-8 px-4 xs:pl-[50px] xs:pr-[50px] sm:pl-[58px] sm:pr-[58px] md:pl-[64px] md:pr-[64px] lg:pl-[114px] lg:pr-[114px] pt-[50px] pb-[140px] relative self-stretch w-full justify-items-center">
      {editingServices.map((service, index) => (
        <article
          key={index}
          onClick={() => window.open(service.url, '_blank')}
          className="w-full h-[140px] flex items-center gap-4 p-6 overflow-hidden border-[0.5px] border-solid border-[#0000001a] shadow-[0px_5px_19px_#00000014,0px_0px_4.4px_#0000000f] hover:shadow-[0px_10px_30px_#00000020,0px_0px_8px_#00000015] hover:-translate-y-1 transition-all duration-300 ease-out bg-white rounded-2xl cursor-pointer"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center px-1">
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