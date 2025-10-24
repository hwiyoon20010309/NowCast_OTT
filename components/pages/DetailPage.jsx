// src/components/pages/DetailPage.jsx
import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { allPrograms, genres, platformColors } from '../../data/programs';
import { filterByGenre, groupByPlatform } from '../../utils/helpers';

const DetailPage = ({ onStart }) => {
  const [selectedGenre, setSelectedGenre] = useState('액션');
  
  const filteredPrograms = filterByGenre(allPrograms, selectedGenre);
  const groupedPrograms = groupByPlatform(filteredPrograms);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto pt-8 pb-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">상세 정보</h2>
          
          <div className="space-y-6">
            {/* 장르 선택 */}
            <div>
              <label className="block text-blue-200 mb-3">선호하는 장르를 선택하세요</label>
              <div className="grid grid-cols-3 gap-3">
                {genres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`py-3 rounded-lg border border-white/30 text-white transition-all ${
                      selectedGenre === genre 
                        ? 'bg-blue-500 shadow-lg scale-105' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
            
            {/* 프로그램 리스트 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-blue-200">프로그램 리스트</label>
                <span className="text-blue-300 text-sm">선택된 장르: {selectedGenre}</span>
              </div>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {Object.keys(groupedPrograms).length > 0 ? (
                  Object.entries(groupedPrograms).map(([platform, shows]) => (
                    <div key={platform} className="bg-white/10 rounded-lg p-4">
                      {/* 플랫폼 헤더 */}
                      <div className={`bg-gradient-to-r ${platformColors[platform]} rounded-lg px-4 py-2 mb-3 inline-block`}>
                        <h3 className="text-white font-bold text-lg">{platform}</h3>
                      </div>
                      
                      {/* 프로그램 카드들 */}
                      <div className="space-y-2">
                        {shows.map((show, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all group">
                            {/* 프로그램 이미지 */}
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">
                              {show.image}
                            </div>
                            
                            {/* 프로그램 정보 */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-white font-semibold truncate">{show.title}</span>
                                <span className="text-yellow-400 text-sm flex items-center flex-shrink-0">
                                  <Star className="w-4 h-4 mr-1 fill-current" />
                                  {show.rating}
                                </span>
                              </div>
                              <span className="text-blue-200 text-sm">{show.genre}</span>
                            </div>
                            
                            {/* 좋아요 버튼 */}
                            <button className="text-blue-300 hover:text-red-400 transition-colors flex-shrink-0">
                              <Heart className="w-5 h-5 group-hover:fill-current" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-blue-200 py-8">
                    해당 장르의 프로그램이 없습니다.
                  </div>
                )}
              </div>
            </div>
            
            {/* 시작하기 버튼 */}
            <button
              onClick={onStart}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;