// src/pages/SubscriptionPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, DollarSign, TrendingDown } from 'lucide-react';

const SubscriptionPage = () => {
  const navigate = useNavigate();
  
  const [subscriptions, setSubscriptions] = useState([
    { name: 'Netflix', price: 9900, status: true },
    { name: 'Disney+', price: 9500, status: true },
    { name: 'Wavve', price: 7900, status: false },
    { name: 'Tving', price: 7900, status: false },
    { name: 'YouTube Premium', price: 10450, status: false },
  ]);

  const toggleSubscription = (index) => {
    const updated = [...subscriptions];
    updated[index].status = !updated[index].status;
    setSubscriptions(updated);
  };

  const currentTotal = subscriptions
    .filter(s => s.status)
    .reduce((sum, s) => sum + s.price, 0);

  // 비용 시뮬레이션 추천
  const recommendations = [
    {
      title: '예능 중심 패키지',
      platforms: ['Tving', 'Wavve'],
      total: 15800,
      savings: currentTotal - 15800,
      reason: '시청 패턴 분석 결과 예능을 주로 시청하시네요!'
    },
    {
      title: '영화 & 드라마 패키지',
      platforms: ['Netflix', 'Disney+'],
      total: 19400,
      savings: currentTotal - 19400,
      reason: '해외 콘텐츠 위주 시청자에게 추천'
    },
    {
      title: '올인원 패키지',
      platforms: ['Netflix', 'Wavve'],
      total: 17800,
      savings: currentTotal - 17800,
      reason: '국내외 콘텐츠 균형있게 즐기기'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/mypage')}
            className="flex items-center text-gray-600 hover:text-blue-600 mb-4"
          >
            <ArrowLeft className="mr-2" />
            마이페이지로 돌아가기
          </button>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <DollarSign className="mr-2 text-blue-600" />
            구독 관리 & 비용 최적화
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 현재 구독 관리 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              현재 구독 관리
            </h2>
            
            <div className="space-y-3 mb-6">
              {subscriptions.map((sub, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={sub.status}
                      onChange={() => toggleSubscription(idx)}
                      className="w-5 h-5 text-blue-600 mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{sub.name}</p>
                      <p className="text-sm text-gray-600">
                        월 {sub.price.toLocaleString()}원
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    sub.status 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {sub.status ? '활성' : '비활성'}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">현재 총 구독료</p>
              <p className="text-3xl font-bold text-blue-600">
                {currentTotal.toLocaleString()}원
                <span className="text-base text-gray-600 font-normal ml-2">/ 월</span>
              </p>
            </div>
          </div>

          {/* 비용 시뮬레이션 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingDown className="mr-2 text-green-600" />
              절약 추천 패키지
            </h2>

            <div className="space-y-4">
              {recommendations.map((rec, idx) => (
                <div 
                  key={idx}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{rec.title}</h3>
                    {rec.savings > 0 && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        -{rec.savings.toLocaleString()}원
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{rec.reason}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {rec.platforms.map((platform, i) => (
                      <span 
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-600">예상 월 비용</span>
                    <span className="text-lg font-bold text-gray-900">
                      {rec.total.toLocaleString()}원
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                💡 <span className="font-semibold">TIP:</span> 시청 패턴 분석을 기반으로 
                최적의 구독 조합을 추천해드립니다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;