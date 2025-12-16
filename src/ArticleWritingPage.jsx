import React from "react";
import { FeaturesSection } from "./FeaturesSection";
import { HeaderSection } from "./HeaderSection";
import { ArticleWritingHeroSection } from "./ArticleWritingHeroSection";
import { ArticleWritingCategorySection } from "./ArticleWritingCategorySection";
import { ArticleWritingHero } from "./ArticleWritingHero";

export const ArticleWritingPage = ({ isLoggedIn, userEmail, onLoginClick, onLogout, onHomeClick, onNavigateToService }) => {
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
      <ArticleWritingHero />

      <div className="relative self-stretch w-full h-0" />

      <ArticleWritingHeroSection />
      <ArticleWritingCategorySection onNavigateToService={onNavigateToService} />
      <div className="relative w-full h-[87px]" />

      <FeaturesSection />
      
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