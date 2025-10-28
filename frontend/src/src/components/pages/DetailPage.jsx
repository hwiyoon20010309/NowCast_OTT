import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { allPrograms, genres } from '../../../data/programs';
import { filterByGenre, groupByPlatform } from '../../utils/helpers';

const platformLogos = {
  Netflix: '/logos/netflix.png',
  'Disney+': '/logos/disney.png',
  Wavve: '/logos/wavve.png',
  Tving: '/logos/tving.png',
};

const platformColors = {
  Netflix: 'bg-gradient-to-r from-red-600 to-red-800',
  'Disney+': 'bg-gradient-to-r from-blue-500 to-indigo-700',
  Wavve: 'bg-gradient-to-r from-blue-400 to-sky-600',
  Tving: 'bg-gradient-to-r from-pink-500 to-red-500',
};

const DetailPage = ({ onStart }) => {
  const [selectedGenre, setSelectedGenre] = useState('액션');
  const [selectedPlatform, setSelectedPlatform] = useState('Netflix');

  const filteredPrograms = filterByGenre(allPrograms, selectedGenre);
  const groupedPrograms = groupByPlatform(filteredPrograms);
  const currentPlatformPrograms = groupedPrograms[selectedPlatform] || [];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto pt-8 pb-20">
        {/* ✅ 상단 로고 */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">📺</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">NowCast+</h1>
          <p className="text-gray-500 text-sm">AI가 추천하는 나만의 OTT 조합</p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* 🎭 장르 선택 */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3">
              선호하는 장르를 선택하세요
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                    selectedGenre === genre
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* 🎬 OTT 선택 버튼 */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(platformLogos).map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  selectedPlatform === platform
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <img src={platformLogos[platform]} alt={platform} className="h-5" />
                {platform}
              </button>
            ))}
          </div>


          {/* 🎞️ 프로그램 리스트 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentPlatformPrograms.length > 0 ? (
              currentPlatformPrograms.map((show, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all group"
                >
                  {/* 썸네일 */}
                  <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src =
                          'https://via.placeholder.com/80x112/e2e8f0/1e293b?text=No+Image';
                      }}
                    />
                  </div>

                  {/* 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-900 font-semibold truncate">
                        {show.title}
                      </span>
                      <span className="text-yellow-500 text-sm flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {show.rating}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{show.genre}</span>
                  </div>

                  {/* 좋아요 */}
                  <button className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0">
                    <Heart className="w-5 h-5 group-hover:fill-current" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8 w-full">
                선택한 플랫폼의 프로그램이 없습니다.
              </div>
            )}
          </div>


          {/* 🚀 시작하기 버튼 */}
          <button
            onClick={onStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-10 rounded-lg font-semibold transition-all shadow-md"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
