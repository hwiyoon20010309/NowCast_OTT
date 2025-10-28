// src/pages/OTTDetailPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Plus, Star } from 'lucide-react';
import { allPrograms, genres } from '../../data/programs';

const OTTDetailPage = () => {
  const { platform } = useParams();
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState('전체');

  const platformNameMap = {
    'netflix': 'Netflix',
    'disney+': 'Disney+',
    'wavve': 'Wavve',
    'tving': 'Tving'
  };

  const actualPlatformName = platformNameMap[platform.toLowerCase()] || 'Netflix';

  const platformColors = {
    'Netflix': { bg: 'bg-red-600', border: 'border-red-600', text: 'text-red-600' },
    'Disney+': { bg: 'bg-blue-600', border: 'border-blue-600', text: 'text-blue-600' },
    'Wavve': { bg: 'bg-cyan-600', border: 'border-cyan-600', text: 'text-cyan-600' },
    'Tving': { bg: 'bg-pink-600', border: 'border-pink-600', text: 'text-pink-600' }
  };

  const colors = platformColors[actualPlatformName] || platformColors['Netflix'];
  const platformPrograms = allPrograms.filter(p => p.platform === actualPlatformName);

  const filteredPrograms = selectedGenre === '전체' 
    ? platformPrograms 
    : platformPrograms.filter(p => p.genre === selectedGenre);

  // 시청 중인 프로그램 (처음 3개를 시청 중으로 가정하고 progress 할당)
  const watchingPrograms = platformPrograms.slice(0, 3).map((p, idx) => ({
    ...p,
    progress: p.progress || [75, 45, 30][idx] || Math.floor(Math.random() * 70 + 20)
  }));

  const recommendedPrograms = filteredPrograms.filter(
    p => !watchingPrograms.find(wp => wp.title === p.title)
  );

  const availableGenres = ['전체', ...new Set(platformPrograms.map(p => p.genre))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className={`${colors.bg} text-white py-6`}>
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate('/main')}
            className="flex items-center text-white hover:text-gray-200 mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2" />
            메인으로 돌아가기
          </button>
          <h1 className="text-4xl font-bold">{actualPlatformName}</h1>
          <p className="text-white/90 mt-2">시청 중인 프로그램과 추천 콘텐츠</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 장르 필터 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {availableGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedGenre === genre
                    ? `${colors.bg} text-white`
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* 시청 중인 프로그램 */}
        {watchingPrograms.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Play className={`mr-2 ${colors.text}`} />
              계속 시청하기
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {watchingPrograms.map((program, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200/e5e7eb/6b7280?text=No+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* 진행률 바 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/30">
                      <div 
                        className={`h-full bg-white transition-all`}
                        style={{ width: `${program.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{program.genre}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm font-medium text-gray-700">
                          {program.rating}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        시청률 {program.progress}%
                      </span>
                    </div>
                    <button className={`w-full py-2 rounded-lg text-white ${colors.bg} hover:opacity-90 transition-all text-sm font-medium`}>
                      계속 시청하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 추천 프로그램 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Plus className={`mr-2 ${colors.text}`} />
            {selectedGenre === '전체' ? '전체 콘텐츠' : `${selectedGenre} 콘텐츠`}
          </h2>
          
          {recommendedPrograms.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {recommendedPrograms.map((program, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150x224/e5e7eb/6b7280?text=No+Image';
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      NEW
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                      <Plus className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {program.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">{program.genre}</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-xs font-medium text-gray-700">
                        {program.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">해당 장르의 콘텐츠가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTTDetailPage;