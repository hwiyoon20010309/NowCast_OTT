// src/components/pages/LoginPage.jsx
import React from 'react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📺</div>
          <h1 className="text-4xl font-bold text-white mb-2">NowCast+</h1>
          <p className="text-blue-200">OTT 콘텐츠 탐색 & 구독 최적화</p>
        </div>
        
        <div className="space-y-4">
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            로그인
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-blue-200 hover:text-white transition-colors">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;