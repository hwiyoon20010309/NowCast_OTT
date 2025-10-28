// src/components/common/OTTCard.jsx
import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

const OTTCard = ({ platform, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${platform.bgColor} border ${platform.borderColor} rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer`}
    >
      {/* 플랫폼 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {platform.logo.startsWith('/') ? (
            <img 
              src={platform.logo} 
              alt={platform.name}
              className="w-8 h-8 object-contain mr-3"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <span className="text-3xl mr-3">{platform.logo}</span>
          )}
          <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>

      {/* 시청 중인 프로그램 목록 */}
      <div className="space-y-3">
        {platform.programs && platform.programs.length > 0 ? (
          platform.programs.map((program, idx) => {
            // progress가 있으면 사용, 없으면 랜덤 생성
            const progress = program.progress || Math.floor(Math.random() * 70 + 20);
            
            return (
              <div 
                key={idx} 
                className="bg-white rounded-lg p-3 border border-gray-200 hover:border-gray-300 transition-all"
              >
                <div className="flex gap-3">
                  {/* 프로그램 썸네일 */}
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-16 h-20 object-cover rounded flex-shrink-0"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/64x80/e5e7eb/6b7280?text=No+Image';
                    }}
                  />
                  
                  {/* 프로그램 정보 */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                        {program.title}
                      </h4>
                      <p className="text-xs text-gray-500">{program.genre}</p>
                    </div>
                    
                    {/* 별점 */}
                    <div className="flex items-center mb-2">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-xs font-medium text-gray-700">
                        {program.rating}
                      </span>
                    </div>

                    {/* 진행률 바 */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">시청률</span>
                        <span className="text-xs font-medium text-gray-700">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`bg-gradient-to-r ${platform.color} h-1.5 rounded-full transition-all`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 text-sm py-4">
            시청 중인 콘텐츠가 없습니다
          </p>
        )}
      </div>

      {/* 더보기 버튼 */}
      <button 
        className="w-full mt-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all text-sm font-medium"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        더 많은 콘텐츠 보기
      </button>
    </div>
  );
};

export default OTTCard;