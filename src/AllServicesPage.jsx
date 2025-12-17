import React from "react";
import { HeaderSection } from "./HeaderSection";

// 모든 서비스 데이터를 하나로 통합
const allServices = [
  // 기사 작성 · 생성
  {
    title: "일보 버디",
    subtitle: "단순한 아이디어도 꼼꼼한 일보로 작성\n한 단어만 입력해도 3개 기사 방향 제안",
    url: "https://b1.sedaily.ai/11",
    icon: "/images/daily.png",
    bgColor: "bg-gray-100"
  },
  {
    title: "기사 버디", 
    subtitle: "일보와 아이디어만 넣으면 기사 초안 작성\n[대괄호]로 확인 필요 사항 투명하게 표시",
    url: "https://b1.sedaily.ai/22",
    icon: "/images/article.png",
    bgColor: "bg-gray-100"
  },
  {
    title: "보도자료_기업",
    subtitle: "기업 보도자료로 기사 초안 작성\n신제품, 서비스 핵심 요약, 분기 실적 분석", 
    url: "https://w1.sedaily.ai/11",
    icon: "/images/comp.png",
    bgColor: "bg-gray-100"
  },
  {
    title: "보도자료_공공",
    subtitle: "정부, 공공기관 보도자료로 기사 초안 작성\n경제정책 영향 분석, 부동산 금융 규제 요약",
    url: "https://w1.sedaily.ai/22",
    icon: "/images/gov.png",
    bgColor: "bg-gray-100"
  },
  {
    title: "외신_영어",
    subtitle: "영문 외신 기사로 한글 기사 초안 작성\n실시간 영문 뉴스 번역, 한국 상황 맥락 추가",
    url: "https://f1.sedaily.ai/11",
    icon: "/images/en.png",
    bgColor: "bg-gray-100"
  },
  {
    title: "외신_일어",
    subtitle: "일본어 외신 뉴스로 한글 기사 초안 작성\n일본식 표현 순화, 정치 경제 용어 표준화",
    url: "https://f1.sedaily.ai/22",
    icon: "/images/ja.png",
    bgColor: "bg-gray-100"
  },
  // 퇴고 · 교열
  {
    title: "퇴고_단문 (1,000자 미만)",
    subtitle: "문맥의 첫 2초 임팩트로 이탈률 50% 감소\n3가지 개선 방향 제시, 번호로 즉시 선택",
    url: "https://r1.sedaily.ai/11",
    icon: "/images/quick.png",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    title: "퇴고_장문 (1,000자 이상)", 
    subtitle: "독자 이탈 포인트 예측, 구조 재배치 제안\n영웅서사/미스터리/플래시백 구조 선택",
    url: "https://r1.sedaily.ai/22",
    icon: "/images/deep.png",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    title: "교열_경제분야",
    subtitle: "숫자, 단위 표기 등 맞춤법 완벽 체크\n주어-서술어 호응 검증, 중복 표현 제거", 
    url: "https://p1.sedaily.ai/11",
    icon: "/images/biz.png",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    title: "교열_사회분야",
    subtitle: "인용 부호 정확성, 간접 인용 문법 체크\n불필요한 피동문 개선, 문단 간 연결성 검토",
    url: "https://p1.sedaily.ai/22",
    icon: "/images/edit.png",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  // 제목 생성
  {
    title: "제목 생성_5종",
    subtitle: "클릭우드형 등 5가지 유형별 차별화\n저널리즘 충실형, 균형잡힌 후킹형 등",
    url: "https://t1.sedaily.ai/11",
    icon: "/images/title.png",
    bgColor: "bg-gray-100"
  },
  {
    title: "제목 찾기_7종", 
    subtitle: "언어 혁신, 충돌 생성, 감성 증폭 엔진\n7가지 엔진으로 새로운 아이디어 제시",
    url: "https://t1.sedaily.ai/22",
    icon: "/images/creative.png",
    bgColor: "bg-gray-100"
  },
  // AI 도구
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

export const AllServicesPage = ({ isLoggedIn, userEmail, onLoginClick, onLogout, onHomeClick, onNavigateToService }) => {
  return (
    <div className="flex flex-col w-full min-h-screen items-start relative bg-white">
      <HeaderSection 
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
        onHomeClick={onHomeClick}
        onNavigateToService={onNavigateToService}
      />

      <div className="relative self-stretch w-full h-0" />

      <section className="flex flex-col w-full items-start gap-2 px-4 xs:pl-[50px] xs:pr-[50px] sm:pl-[58px] sm:pr-[58px] md:pl-[64px] md:pr-[64px] lg:pl-[114px] lg:pr-[114px] pt-4 pb-0 relative flex-[0_0_auto]">
        <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#0000008c] text-xl tracking-[-0.10px] leading-[29.0px] whitespace-nowrap">
          AI NEXUS 전체 서비스
        </p>

        <h1 className="w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-5xl tracking-[-0.96px] leading-[57.6px] whitespace-nowrap relative flex items-center justify-center text-black">
          모든 AI 도구 한눈에
        </h1>
      </section>

      <section className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-8 px-4 xs:pl-[50px] xs:pr-[50px] sm:pl-[58px] sm:pr-[58px] md:pl-[64px] md:pr-[64px] lg:pl-[114px] lg:pr-[114px] pt-[20px] pb-[100px] relative self-stretch w-full justify-items-center">
        {allServices.map((service, index) => (
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

      <div className="relative w-full h-[87px]" />

      <section className="h-[270px] items-center justify-center px-4 md:px-16 lg:px-[500px] bg-[#f2f4f4] flex relative self-stretch w-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="[font-family:'Inter-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[-0.40px] leading-[24px]">
            서비스 이용 안내
          </h2>
          <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#0000008c] text-sm text-center tracking-[-0.07px] leading-[20.3px] flex flex-col items-center justify-center gap-1">
            <div className="whitespace-nowrap">각 AI 서비스는 독립적으로 운영되며, 서비스별로 별도의 로그인이 필요할 수 있습니다.</div>
            <div className="whitespace-nowrap">AI 버디는 24시간 언제든 이용 가능하며, 새벽에도 주말에도 마감 직전에도 함께합니다.</div>
            <div className="whitespace-nowrap">문의사항은 <a
              href="mailto:ai@sedaily.com"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.02px] underline text-[#0062FF]"
            >
              ai@sedaily.com
            </a>으로 연락주세요.</div>
          </div>
        </div>
      </section>
      
      <footer className="bg-white border-t w-full">
        <div className="w-full flex justify-center items-center py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 서울경제신문. All rights reserved.</p>
            <p className="mt-1">Powered by AWS & AI Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};