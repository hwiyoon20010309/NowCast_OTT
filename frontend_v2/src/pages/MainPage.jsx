// src/pages/MainPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import OTTCard from '../components/common/OTTCard';
import { allPrograms, youtubeChannels } from '../../data/programs';

const MainPage = ({ onLogout }) => {
  const navigate = useNavigate();

  // OTT 플랫폼 설정
  const ottPlatforms = [
    {
      name: 'Netflix',
      logo: '/logos/netflix.png',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      programs: allPrograms
        .filter(p => p.platform === 'Netflix')
        .slice(0, 3)
    },
    {
      name: 'Disney+',
      logo: '/logos/disney.png',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      programs: allPrograms
        .filter(p => p.platform === 'Disney+')
        .slice(0, 3)
    },
    {
      name: 'Wavve',
      logo: '/logos/wavve.png',
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      programs: allPrograms
        .filter(p => p.platform === 'Wavve')
        .slice(0, 3)
    },
    {
      name: 'Tving',
      logo: '/logos/tving.png',
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      programs: allPrograms
        .filter(p => p.platform === 'Tving')
        .slice(0, 3)
    }
  ];

  const handleOTTClick = (platform) => {
    navigate(`/ott/${platform.toLowerCase()}`);
  };

  const handleYouTubeClick = () => {
    console.log('YouTube 버튼 클릭!'); // 디버깅용
    navigate('/youtube');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={onLogout} />
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            시청 중인 콘텐츠 📺
          </h2>
          <p className="text-gray-600">
            각 플랫폼에서 시청 중인 프로그램을 한눈에 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ottPlatforms.map((platform, index) => (
            <OTTCard
              key={index}
              platform={platform}
              onClick={() => handleOTTClick(platform.name)}
            />
          ))}
        </div>

        {/* YouTube 섹션 */}
        <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="text-2xl mr-2">▶️</span>
              YouTube 구독 채널
            </h3>
            <button
              onClick={handleYouTubeClick}
              className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors hover:underline"
            >
              더 많은 영상 보기 →
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {youtubeChannels.map((channel, idx) => (
              <div 
                key={idx} 
                onClick={handleYouTubeClick}
                className="flex-shrink-0 text-center cursor-pointer group"
              >
                <div className="relative w-24 h-24 mb-2 overflow-hidden rounded-full border-2 border-gray-200 group-hover:border-red-400 transition-all">
                  <img 
                    src={channel.image}
                    alt={channel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/96/fee2e2/dc2626?text=YT';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
                </div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                  {channel.name}
                </p>
                <p className="text-xs text-gray-500">{channel.subscribers}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;