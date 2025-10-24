// src/components/pages/MyPage.jsx
import React from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

const MyPage = ({ onNavigateToMain }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 네비게이션 */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-white">📺 NowCast+</h1>
              <div className="hidden md:flex space-x-6">
                <button 
                  onClick={onNavigateToMain}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  메인 페이지
                </button>
                <button className="text-white hover:text-blue-400 transition-colors">
                  마이페이지
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 내 구독 관리 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <DollarSign className="mr-2" /> 내 구독 관리
            </h3>
            <div className="space-y-3">
              {['Netflix', 'Disney+'].map(service => (
                <div key={service} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{service}</span>
                    <span className="text-green-400 text-sm">활성</span>
                  </div>
                  <p className="text-gray-400 text-sm">월 9,900원</p>
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
                    OTT 플롯 리포트 보기
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 출석체크/일일 목록 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Users className="mr-2" /> 출석체크 / 일일 목록
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-white font-semibold">연속 출석 7일!</p>
                <p className="text-blue-200 text-sm mt-1">100 포인트 획득</p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3">오늘의 할일</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300 text-sm">
                    <input type="checkbox" className="mr-2" />
                    <span>시청 예정 콘텐츠 3개 보기</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <input type="checkbox" className="mr-2" />
                    <span>리뷰 1개 작성하기</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 비용 시뮬레이터 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="mr-2" /> 비용 시뮬레이터
            </h3>
            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <div className="text-center mb-4">
                <p className="text-gray-400 text-sm mb-2">현재 월 구독료</p>
                <p className="text-3xl font-bold text-white">19,800원</p>
              </div>
              <div className="border-t border-gray-600 pt-4">
                <p className="text-gray-400 text-sm mb-2">추천 최적화 플랜</p>
                <p className="text-2xl font-bold text-green-400">14,900원</p>
                <p className="text-green-400 text-sm mt-1">월 4,900원 절약</p>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600">
              최적화 제안 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;