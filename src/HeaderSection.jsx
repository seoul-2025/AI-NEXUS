import React from "react";

export const HeaderSection = ({ isLoggedIn, userEmail, onLoginClick, onLogout, onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between pl-16 md:pl-20 lg:pl-28 pr-4 md:pr-8 lg:pr-16 py-3 bg-white shadow-sm self-stretch w-full flex-[0_0_auto]">
      <h1 
        onClick={onHomeClick}
        className="flex-1 mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-base md:text-xl lg:text-[31px] tracking-[-1.68px] leading-[36.6px] relative flex items-center justify-start cursor-pointer transition-colors"
        style={{
          ':hover': {
            background: 'linear-gradient(135deg, #0c1445 0%, #1a1a2e 50%, #16213e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #0c1445 0%, #1a1a2e 50%, #16213e 100%)';
          e.target.style.webkitBackgroundClip = 'text';
          e.target.style.webkitTextFillColor = 'transparent';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'none';
          e.target.style.webkitBackgroundClip = 'unset';
          e.target.style.webkitTextFillColor = 'unset';
          e.target.style.color = 'black';
        }}
      >
        AI NEXUS
      </h1>

      <nav className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
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
            className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-lg text-center tracking-[-0.12px] leading-[29.8px] whitespace-nowrap bg-transparent border-0 cursor-pointer hover:text-blue-600 transition-colors"
            aria-label="Login to your account"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
};