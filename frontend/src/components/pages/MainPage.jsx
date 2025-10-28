// src/components/pages/MainPage.jsx
import React from 'react';
import { Search, Tv, Clock, Star, Play } from 'lucide-react';

// OTT 플랫폼 로고 (public/images/logos에 저장)
const ottLogos = {
  Netflix: '/logos/netflix.png',
  'Disney+': '/logos/disney.png',
  Wavve: '/logos/wavve.png',
  Tving: '/logos/tving.png',
};

// 맞춤 추천 콘텐츠 (public/images/programs에 저장)
const recommendedContents = [
  { title: '슬기로운 의사생활', platform: 'Netflix', image: '/programs/netflix_hospital.png' },
  { title: '무빙', platform: 'Disney+', image: '/programs/disney_moving.png' },
  { title: '범죄도시', platform: 'Wavve', image: '/programs/wavve_crimecity.png' },
  { title: '방과후 전쟁활동', platform: 'Tving', image: '/programs/tving_afterwar.png' },
  { title: '피지컬: 100', platform: 'Netflix', image: '/programs/netflix_physical100.png' },
];

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
        {/* 🎬 OTT 탐색 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <Tv className="mr-2 text-blue-600" /> OTT 탐색
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(ottLogos).map((platform) => (
              <div
                key={platform}
                className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center"
              >
                <img
                  src={ottLogos[platform]}
                  alt={platform}
                  className="h-12 mb-3 object-contain"
                  onError={(e) =>
                    (e.target.src = 'https://via.placeholder.com/80x40?text=No+Logo')
                  }
                />
                <h3 className="text-gray-900 font-semibold text-lg">{platform}</h3>
                <p className="text-gray-500 text-sm mt-2">인기 콘텐츠 보기</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⏰ TV 채널보기 섹션 */}
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

        {/* 🌟 맞춤 추천 섹션 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <Star className="mr-2 text-yellow-400" /> 맞춤 추천
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {recommendedContents.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden aspect-[2/3] mb-3 bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    onError={(e) =>
                      (e.target.src = 'https://via.placeholder.com/150x225?text=No+Image')
                    }
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-gray-800 font-medium truncate">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.platform}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
