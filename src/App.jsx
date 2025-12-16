import React, { useState, useEffect } from 'react';
import './index.css';
import { Desktop } from './Desktop';

function App() {
  const [currentPage, setCurrentPage] = useState('portal');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (formData.email && formData.password) {
        setIsLoggedIn(true);
        setUserEmail(formData.email);
        setCurrentPage('portal');
      } else {
        setError('이메일과 비밀번호를 입력해주세요.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage('login');
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = async () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  const handleHomeClick = () => {
    if (currentPage === 'portal') {
      window.location.reload();
    } else {
      setCurrentPage('portal');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError('');
  };

  if (currentPage === 'login') {
    return <LoginPage
      formData={formData}
      isLoading={isLoading}
      error={error}
      onSubmit={handleLogin}
      onInputChange={handleInputChange}
      onGoToSignup={() => setCurrentPage('signup')}
      onBackToPortal={handleHomeClick}
      onHomeClick={handleHomeClick}
    />;
  }

  if (currentPage === 'signup') {
    return <SignupPage
      formData={formData}
      isLoading={isLoading}
      error={error}
      onSubmit={handleSignup}
      onInputChange={handleInputChange}
      onBackToLogin={() => setCurrentPage('login')}
      onHomeClick={handleHomeClick}
    />;
  }

  return (
    <div className="App">
      <Desktop 
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLoginClick={() => setCurrentPage('login')}
        onLogout={handleLogout}
        onHomeClick={handleHomeClick}
      />
    </div>
  );
}

const LoginPage = ({ formData, isLoading, error, onSubmit, onInputChange, onGoToSignup, onBackToPortal, onHomeClick }) => (
  <div
    className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}
  >
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <img src="/images/illustrations/pen1.png" alt="" className="w-full h-full object-contain transform rotate-12" />
      </div>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-15">
        <img src="/images/illustrations/pen2.png" alt="" className="w-full h-full object-contain transform rotate-45" />
      </div>
      <div className="absolute bottom-20 left-20 w-28 h-28 opacity-15">
        <img src="/images/illustrations/pen3.png" alt="" className="w-full h-full object-contain transform -rotate-12" />
      </div>
      <div className="absolute bottom-10 right-10 w-36 h-36 opacity-20">
        <img src="/images/illustrations/pen4.png" alt="" className="w-full h-full object-contain transform rotate-30" />
      </div>

      <div
        className="absolute top-1/4 right-1/4 w-[750px] h-[750px]"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.08) 40%, rgba(90, 103, 216, 0.04) 60%, transparent 80%)',
          filter: 'blur(100px)'
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px]"
        style={{
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.10) 0%, rgba(0, 242, 254, 0.06) 40%, rgba(102, 126, 234, 0.03) 60%, transparent 80%)',
          filter: 'blur(100px)'
        }}
      />
    </div>
    
    <button
      onClick={onBackToPortal}
      className="absolute top-6 sm:top-8 left-6 sm:left-8 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl transition-all hover:scale-105 z-10 group"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        color: "#4a5568",
        border: "1px solid rgba(226, 232, 240, 0.8)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
      }}
    >
      <span className="font-medium text-sm">← 홈으로</span>
    </button>

    <div className="max-w-md w-full z-10">
      <div
        className="rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(102, 126, 234, 0.05), 0 0 1px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="p-8 sm:p-10">
          <div className="flex flex-col items-center mb-10">
            <div className="relative group cursor-pointer" onClick={onHomeClick}>
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  transform: 'scale(1.5)'
                }}
              />
              <img
                src="/images/ainova.png"
                alt="AI NEXUS Logo"
                className="w-56 h-56 object-contain relative z-10 transform transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-4">
              <InputField
                id="email"
                label="이메일"
                type="email"
                value={formData.email}
                onChange={(e) => onInputChange("email", e.target.value)}
                placeholder="이메일 주소를 입력하세요"
              />

              <InputField
                id="password"
                label="비밀번호"
                type="password"
                value={formData.password}
                onChange={(e) => onInputChange("password", e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            {error && <ErrorMessage message={error} />}

            <SubmitButton isLoading={isLoading} text={isLoading ? "로그인 중..." : "로그인"} />

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: "#e2e8f0" }}></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="px-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", color: "#a0aec0" }}>
                  또는
                </span>
              </div>
            </div>

            <div className="text-center">
              <span className="text-sm" style={{ color: "#718096" }}>
                아직 계정이 없으신가요?{" "}
              </span>
              <button
                type="button"
                className="text-sm font-semibold hover:underline transition-colors"
                style={{ color: "#667eea" }}
                onClick={onGoToSignup}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const SignupPage = ({ formData, isLoading, error, onSubmit, onInputChange, onBackToLogin, onHomeClick }) => (
  <div
    className="min-h-screen flex items-center relative overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}
  >
    <button
      onClick={onBackToLogin}
      className="absolute top-6 sm:top-8 left-6 sm:left-8 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl transition-all hover:scale-105 z-10 group"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        color: "#4a5568",
        border: "1px solid rgba(226, 232, 240, 0.8)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
      }}
    >
      <span className="font-medium text-sm">← 로그인으로</span>
    </button>

    <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
      <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 w-[200px] h-[200px] opacity-20">
        <img src="/images/illustrations/pen1.png" alt="" className="w-full h-full object-contain transform -rotate-8" />
      </div>
      <div className="absolute top-1/3 right-[15%] w-[150px] h-[150px] opacity-15">
        <img src="/images/illustrations/pen2.png" alt="" className="w-full h-full object-contain transform rotate-45" />
      </div>
      <div className="absolute bottom-1/4 right-[8%] w-[120px] h-[120px] opacity-15">
        <img src="/images/illustrations/pen3.png" alt="" className="w-full h-full object-contain transform rotate-12" />
      </div>

      <div
        className="absolute top-1/4 right-1/4 w-[900px] h-[900px]"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.10) 40%, rgba(90, 103, 216, 0.05) 60%, transparent 80%)',
          filter: 'blur(120px)'
        }}
      />
    </div>
    
    <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-20 sm:py-12 z-10">
      <div
        className="rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(102, 126, 234, 0.05), 0 0 1px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="p-8 sm:p-10">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/images/ainova.png"
              alt="AI NEXUS Logo"
              onClick={onHomeClick}
              className="w-48 h-48 object-contain transform transition-all duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-4">
              <InputField
                id="email"
                label="이메일"
                type="email"
                value={formData.email}
                onChange={(e) => onInputChange("email", e.target.value)}
                placeholder="이메일 주소를 입력하세요"
              />

              <InputField
                id="password"
                label="비밀번호"
                type="password"
                value={formData.password}
                onChange={(e) => onInputChange("password", e.target.value)}
                placeholder="비밀번호 (8자 이상)"
              />

              <InputField
                id="confirmPassword"
                label="비밀번호 확인"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => onInputChange("confirmPassword", e.target.value)}
                placeholder="비밀번호 재입력"
              />
            </div>

            {error && <ErrorMessage message={error} />}

            <SubmitButton isLoading={isLoading} text={isLoading ? "처리중..." : "회원가입"} />

            <div className="text-center">
              <span className="text-sm" style={{ color: "#718096" }}>
                이미 계정이 있으신가요?{" "}
              </span>
              <button
                type="button"
                onClick={onBackToLogin}
                className="text-sm font-semibold hover:underline transition-colors"
                style={{ color: "#667eea" }}
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const InputField = ({ id, label, type, value, onChange, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-bold mb-2.5"
      style={{ color: "#1a202c", letterSpacing: "-0.01em" }}
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required
      value={value}
      onChange={onChange}
      className="appearance-none relative block w-full px-4 py-4 rounded-xl focus:outline-none text-base transition-all duration-300"
      style={{
        backgroundColor: "#ffffff",
        border: "2px solid #e2e8f0",
        color: "#2d3748",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)"
      }}
      placeholder={placeholder}
    />
  </div>
);

const ErrorMessage = ({ message }) => (
  <div
    className="rounded-xl p-4 flex items-start gap-3"
    style={{
      backgroundColor: "#fff5f5",
      border: "1px solid #feb2b2"
    }}
  >
    <p className="text-sm flex-1" style={{ color: "#c53030" }}>
      {message}
    </p>
  </div>
);

const SubmitButton = ({ isLoading, text }) => (
  <button
    type="submit"
    disabled={isLoading}
    className="group relative w-full flex justify-center items-center py-4 px-4 text-base font-bold rounded-xl focus:outline-none transition-all duration-300"
    style={{
      background: isLoading
        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        : "linear-gradient(135deg, #5a67d8 0%, #667eea 50%, #764ba2 100%)",
      color: "white",
      border: "none",
      boxShadow: "0 6px 20px rgba(102, 126, 234, 0.45), 0 2px 8px rgba(118, 75, 162, 0.2)",
      opacity: isLoading ? 0.7 : 1,
      cursor: isLoading ? "not-allowed" : "pointer"
    }}
  >
    {isLoading && (
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    )}
    {text}
  </button>
);

export default App;