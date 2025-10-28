// src/pages/SignupPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // 회원가입 처리 후 로그인 페이지로
    alert("회원가입이 완료되었습니다!");
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md border border-gray-200">
        <div className="text-center mb-10">
          <div className="text-5xl mb-5">📺</div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">
            NowCast<span className="text-blue-500">+</span>
          </h1>
          <p className="text-gray-500 text-sm">
            나에게 맞는 OTT 구독을 한눈에
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="아이디"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="이메일"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-gray-600 text-center text-sm mb-2">SNS로 간편 가입</p>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-all">
                <span className="text-xl">G</span>
                <span className="text-gray-700 font-medium text-sm">Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-yellow-50 hover:bg-yellow-100 hover:border-yellow-400 transition-all">
                <span className="text-xl">K</span>
                <span className="text-gray-800 font-medium text-sm">Kakao</span>
              </button>

              <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-green-50 hover:bg-green-100 hover:border-green-400 transition-all">
                <span className="text-xl">N</span>
                <span className="text-gray-800 font-medium text-sm">Naver</span>
              </button>
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            회원가입
          </button>

          <p className="text-center text-gray-500 mt-4">
            이미 계정이 있으신가요?{" "}
            <span 
              onClick={handleLoginRedirect}
              className="text-blue-500 font-medium hover:underline cursor-pointer"
            >
              로그인하기
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;