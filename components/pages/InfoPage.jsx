// src/components/pages/InfoPage.jsx
import React from 'react';

const InfoPage = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-2xl mx-auto pt-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">회원가입 정보</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-blue-200 mb-2">아이디</label>
              <input
                type="text"
                placeholder="사용할 아이디를 입력하세요"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-300"
              />
            </div>
            
            <div>
              <label className="block text-blue-200 mb-2">SNS 연동</label>
              <div className="grid grid-cols-3 gap-3">
                <button className="py-3 rounded-lg bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all">
                  Google
                </button>
                <button className="py-3 rounded-lg bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all">
                  Kakao
                </button>
                <button className="py-3 rounded-lg bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all">
                  Naver
                </button>
              </div>
            </div>
            
            <button
              onClick={onNext}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              다음 단계
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;