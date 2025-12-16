import React from "react";

export const FeaturesSection = () => {
  return (
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
  );
};