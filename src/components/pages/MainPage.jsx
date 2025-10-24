// src/components/pages/MainPage.jsx
import React from 'react';
import { Search, Tv, Clock, Star, Play } from 'lucide-react';

const MainPage = ({ onNavigateToMyPage }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 네비게이션 */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-blue-600">📺 NowCast+</h1>
              <div className="hidden md:flex space-x-6">
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  메인 페이지
                </button>
                <button
                  onClick={onNavigateToMyPage}
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  마이페이지
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="콘텐츠 검색..."
                  className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* OTT 탐색 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <Tv className="mr-2 text-blue-600" /> OTT 탐색
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Netflix', 'Disney+', 'Wavve', 'Tving'].map((platform) => (
              <div
                key={platform}
                className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="text-3xl mb-3">📺</div>
                <h3 className="text-gray-900 font-semibold text-lg">{platform}</h3>
                <p className="text-gray-500 text-sm mt-2">인기 콘텐츠 보기</p>
              </div>
            ))}
          </div>
        </section>

        {/* TV 채널보기 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <Clock className="mr-2 text-blue-600" /> TV 채널보기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '놀라운 토요일', channel: 'tvN', time: '저녁 7시 30분' },
              { title: '유 퀴즈 온 더 블럭', channel: 'tvN', time: '저녁 8시 45분' },
              { title: '나 혼자 산다', channel: 'MBC', time: '저녁 11시 10분' },
            ].map((show, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</div>
                  <Play className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-1">{show.title}</h3>
                <p className="text-gray-500 text-sm">
                  {show.channel} · {show.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 추천 콘텐츠 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <Star className="mr-2 text-yellow-400" /> 맞춤 추천
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-200 rounded-lg aspect-[2/3] mb-3 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <Play className="w-12 h-12 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-gray-800 font-medium">추천 콘텐츠 {i}</h3>
                <p className="text-gray-500 text-sm">Netflix</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
