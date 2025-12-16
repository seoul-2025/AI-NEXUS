import React from "react";

const pricingCards = [
  {
    title: "기사 작성 · 생성",
    subtitle: (
      <>
        아이디어부터 <br />
        기사 초안까지, 한 번에
      </>
    ),
    features: [
      "단순한 아이디어로 기사 초안 작성",
      "일본어, 영어 기사로 한글 초안 생성",
      "기업 보도자료를 기사 형식으로 작성",
      "정부·공공 보도자료를 기사 초안으로 변환",
    ],
  },
  {
    title: "퇴고 · 교열",
    subtitle: (
      <>
        마감 직전, <br />
        정확함이 필요한 순간
      </>
    ),
    features: [
      "문맥의 첫 2초 임팩트를 이탈률 50% 감소",
      "독자 이탈 포인트 예측, 구조 재배치 제안",
      "숫자·단위·용어 점검 → 경제 기사 정확도 향상",
      "인용·문맥·표현 점검 → 사회 기사 신뢰도 향상",
    ],
  },
  {
    title: "제목 생성",
    subtitle: (
      <>
        독자의 마음을 사로잡는 <br />
        매력적인 제목 아이디어
      </>
    ),
    features: [
      "기사의 핵심을 뚫는 통찰력",
      "독자들의 클릭을 유도하는 제목 생성",
      "언어 혁신, 충돌 생성, 감성 증폭 엔진",
      "정보형·감정형·비교형 등 5가지 유형으로 제안",
    ],
  },
  {
    title: "AI 도구",
    subtitle: (
      <>
        외부 AI를 <br />
        하나의 작업 환경에서
      </>
    ),
    features: [
      "Chat GPT",
      "Claude",
      "Perplexity",
    ],
  },
];

export const CategorySection = () => {
  return (
    <section className="grid grid-cols-1 min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3 min-[1800px]:grid-cols-4 gap-8 px-4 sm:px-8 md:px-14 lg:px-26 pt-[50px] pb-[100px] relative self-stretch w-full justify-items-center">
      {pricingCards.map((card, cardIndex) => (
        <article
          key={cardIndex}
          className="w-full h-auto min-h-[485px] gap-8 overflow-hidden border-[0.5px] border-solid border-[#0000001a] shadow-[0px_5px_19px_#00000014,0px_0px_4.4px_#0000000f] hover:shadow-[0px_10px_30px_#00000020,0px_0px_8px_#00000015] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-start pt-[52px] pb-6 px-4 sm:px-6 relative bg-white rounded-2xl"
        >
          <header className="flex items-baseline gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative flex items-center justify-start w-fit mt-[-1.00px] ml-1 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl lg:text-[44px] tracking-[-0.80px] leading-[44.0px] whitespace-nowrap">
              {card.title}
            </h2>
          </header>

          <p className="relative flex items-center justify-start w-fit ml-1 [font-family:'Inter-Light',Helvetica] font-light text-black text-xl sm:text-2xl lg:text-3xl tracking-[-0.60px] leading-[33.0px] -mt-2 mb-4">
            {card.subtitle}
          </p>

          <ul className="flex-col items-start gap-3 flex-[0_0_auto] flex relative self-stretch w-full">
            {card.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="items-center gap-2 flex-[0_0_auto] flex relative self-stretch w-full"
              >
                <div className="relative w-6 h-6 rounded-3xl overflow-hidden bg-gray-200">
                  <div className="absolute top-[calc(50.00%_-_5px)] left-[calc(50.00%_-_6px)] w-[11px] h-2.5 bg-gray-400 rounded-full"></div>
                </div>

                <p className="relative flex-1 self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-sm sm:text-base lg:text-lg tracking-[-0.09px] leading-[25.2px] whitespace-nowrap">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex-1"></div>

          <button
            onClick={() => {
              alert(`${card.title} 서비스 준비 중입니다.`);
            }}
            className="border-2 border-solid border-[#00000026] hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 px-4 py-3 absolute bottom-[35px] left-6 right-6 rounded-xl cursor-pointer group"
            aria-label={`${card.title} 더 알아보기`}
          >
            <span className="relative flex items-center justify-center w-fit mt-[-2.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black group-hover:text-white text-base tracking-[-0.08px] leading-[23.2px] whitespace-nowrap">
              더 알아보기
            </span>
          </button>
        </article>
      ))}
    </section>
  );
};