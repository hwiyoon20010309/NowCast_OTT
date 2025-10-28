// src/components/pages/LoginPage.jsx
import React from 'react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      {/* 로그인 카드 */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 w-full max-w-md">
        {/* 로고 영역 */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">📺</div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            <span className="text-black">NowCast</span>
            <span className="text-blue-500">+</span>
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            OTT 콘텐츠 탐색 & 구독 최적화 플랫폼
          </p>
        </div>

        {/* 입력 영역 */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* 로그인 버튼 */}
          <button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold tracking-wide hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md"
          >
            로그인
          </button>
        </div>

        {/* 회원가입 링크 */}
        <div className="mt-8 text-center">
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
