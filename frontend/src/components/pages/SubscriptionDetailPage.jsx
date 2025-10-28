// src/components/pages/SubscriptionDetailPage.jsx
import React from 'react';
import { DollarSign, TrendingUp, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SubscriptionDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="border-b border-gray-200 shadow-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">📺 NowCast+</h1>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> 돌아가기
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* 내 구독 관리 */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
            <DollarSign className="mr-2 text-blue-600" /> 내 구독 관리
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Netflix', 'Disney+'].map((service) => (
              <div key={service} className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 font-semibold">{service}</span>
                  <span className="text-green-600 text-sm font-medium">활성</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">월 9,900원</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  OTT 플랜 리포트 보기
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 비용 시뮬레이터 */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
            <TrendingUp className="mr-2 text-green-600" /> 비용 시뮬레이터
          </h3>
          <div className="bg-gray-50 rounded-lg border border-gray-100 p-6 mb-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">현재 월 구독료</p>
              <p className="text-3xl font-bold text-gray-800">19,800원</p>
            </div>
            <div className="text-center mt-6 md:mt-0">
              <p className="text-gray-500 text-sm mb-1">추천 최적화 플랜</p>
              <p className="text-2xl font-bold text-green-600">14,900원</p>
              <p className="text-green-500 text-sm mt-1">월 4,900원 절약</p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all">
            최적화 제안 보기
          </button>
        </section>
      </div>
    </div>
  );
};

export default SubscriptionDetailPage;
