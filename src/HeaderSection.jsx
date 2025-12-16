import React from "react";

export const HeaderSection = ({ isLoggedIn, userEmail, onLoginClick, onLogout, onHomeClick, onNavigateToService = () => {} }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between pl-16 md:pl-20 lg:pl-28 pr-4 md:pr-8 lg:pr-16 py-3 bg-white shadow-sm self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center gap-[67px]">
        <h1 
          onClick={onHomeClick}
          className="mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-base md:text-xl lg:text-[31px] tracking-[-1.68px] leading-[36.6px] relative flex items-center justify-start cursor-pointer transition-colors hover:bg-gradient-to-r hover:from-blue-900 hover:via-gray-800 hover:to-blue-800 hover:bg-clip-text hover:text-transparent"
        >
          AI NEXUS
        </h1>
        
        <nav className="hidden min-[900px]:flex items-center gap-[92px]">
        <button 
          onClick={() => onNavigateToService('article-writing')}
          className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          Write
        </button>
        <button 
          onClick={() => onNavigateToService('proofreading')}
          className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          Edit
        </button>
        <button 
          onClick={() => onNavigateToService('title-generation')}
          className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          Title
        </button>
        <button 
          onClick={() => onNavigateToService('ai-tools')}
          className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          AI Tools
        </button>
        </nav>
      </div>

      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        {isLoggedIn ? (
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-700">{userEmail}</span>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onLoginClick}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Login to your account"
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
};