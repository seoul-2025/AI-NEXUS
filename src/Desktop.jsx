import React from "react";
import { FeaturesSection } from "./FeaturesSection";
import { HeaderSection } from "./HeaderSection";
import { HeroSection } from "./HeroSection";
import { CategorySection } from "./CategorySection";
import { Hero } from "./Hero";

export const Desktop = ({ isLoggedIn, userEmail, onLoginClick, onLogout, onHomeClick }) => {
  return (
    <div className="flex flex-col w-full min-h-screen items-start relative bg-white">
      <HeaderSection 
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
        onHomeClick={onHomeClick}
      />
      <Hero />

      <div className="relative self-stretch w-full h-0" />

      <HeroSection />
      <CategorySection />
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