// src/pages/ActivityPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, MessageSquare, Trash2, Edit } from 'lucide-react';
import { allPrograms } from '../../data/programs';

const ActivityPage = () => {
  const navigate = useNavigate();

  // 실제 데이터에서 찜한 프로그램 가져오기 (시청률 높은 순)
  const [favoriteShows, setFavoriteShows] = useState(
    allPrograms
      .filter(p => p.progress && p.progress > 30)
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 12)
      .map((p, idx) => ({
        id: idx + 1,
        ...p,
        addedDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0].replace(/-/g, '.')
      }))
  );

  // 리뷰 데이터 (실제 프로그램 기반)
  const reviewPrograms = allPrograms.filter(p => 
    ['D.P.', 'SNL', '아바타', '무빙', '환승연애', '슬기로운'].some(keyword => p.title.includes(keyword))
  );

  const [myReviews, setMyReviews] = useState([
    {
      id: 1,
      program: reviewPrograms[0]?.title || 'D.P. 시즌2',
      platform: reviewPrograms[0]?.platform || 'Netflix',
      rating: 4.5,
      content: '스토리가 훨씬 깊어졌어요! 연기도 정말 훌륭합니다. 강추합니다 👍',
      date: '2024.10.28',
      likes: 12,
      image: reviewPrograms[0]?.image
    },
    {
      id: 2,
      program: '환승연애 시즌3',
      platform: 'Tving',
      rating: 4.0,
      content: '출연진이 너무 재밌어요 😂 매주 기다려집니다!',
      date: '2024.10.25',
      likes: 8,
      image: allPrograms.find(p => p.title.includes('환승연애'))?.image
    },
    {
      id: 3,
      program: reviewPrograms[2]?.title || '무빙',
      platform: reviewPrograms[2]?.platform || 'Disney+',
      rating: 5.0,
      content: '올해 최고의 작품! 액션 연출이 영화급이에요 🔥',
      date: '2024.10.20',
      likes: 15,
      image: reviewPrograms[2]?.image
    },
    {
      id: 4,
      program: '슬기로운 의사생활',
      platform: 'Netflix',
      rating: 4.8,
      content: '힐링되는 드라마. OST도 너무 좋아요 🎵',
      date: '2024.10.15',
      likes: 20,
      image: allPrograms.find(p => p.title.includes('슬기로운'))?.image
    },
  ]);

  const handleRemoveFavorite = (id) => {
    if (window.confirm('찜 목록에서 삭제하시겠습니까?')) {
      setFavoriteShows(favoriteShows.filter(show => show.id !== id));
    }
  };

  const handleDeleteReview = (id) => {
    if (window.confirm('리뷰를 삭제하시겠습니까?')) {
      setMyReviews(myReviews.filter(review => review.id !== id));
    }
  };

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
            <Heart className="mr-2 text-pink-500" />
            나의 활동
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 찜한 프로그램 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="mr-2 text-pink-500" />
                찜한 프로그램 ({favoriteShows.length})
              </div>
            </h2>

            <div className="grid grid-cols-2 gap-3 max-h-[600px] overflow-y-auto">
              {favoriteShows.map((show) => (
                <div 
                  key={show.id}
                  className="relative group"
                >
                  <div className="relative">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full aspect-[2/3] rounded-lg object-cover border border-gray-200 shadow-sm hover:shadow-md transition-all"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="224"%3E%3Crect fill="%23e2e8f0" width="150" height="224"/%3E%3Ctext fill="%231e293b" font-size="16" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    
                    {/* 플랫폼 뱃지 */}
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {show.platform}
                    </div>

                    {/* 삭제 버튼 */}
                    <button
                      onClick={() => handleRemoveFavorite(show.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>

                    {/* 진행률 바 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-300 rounded-b-lg overflow-hidden">
                      <div 
                        className="h-full bg-pink-500"
                        style={{ width: `${show.progress}%` }}
                      ></div>
                    </div>

                    {/* 호버 오버레이 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all rounded-lg flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm font-semibold mb-1 line-clamp-2">{show.title}</p>
                      <p className="text-white/90 text-xs">{show.genre}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-white text-xs">{show.rating}</span>
                        </div>
                        <span className="text-white/90 text-xs">{show.progress}% 시청</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">추가: {show.addedDate}</p>
                  </div>
                </div>
              ))}
            </div>

            {favoriteShows.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <Heart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>찜한 프로그램이 없습니다</p>
              </div>
            )}
          </div>

          {/* 내가 쓴 리뷰 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare className="mr-2 text-blue-500" />
                내가 쓴 리뷰 ({myReviews.length})
              </div>
            </h2>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {myReviews.map((review) => (
                <div 
                  key={review.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all relative group"
                >
                  <div className="flex gap-3">
                    {/* 프로그램 썸네일 */}
                    {review.image && (
                      <img
                        src={review.image}
                        alt={review.program}
                        className="w-16 h-24 rounded object-cover flex-shrink-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.program}</h3>
                          <p className="text-xs text-gray-500">{review.platform}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="font-medium">{review.rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 mb-3">{review.content}</p>

                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{review.date}</span>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1 text-pink-500" />
                            <span>{review.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 액션 버튼 */}
                  <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600">
                      <Edit className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => handleDeleteReview(review.id)}
                      className="bg-red-500 text-white p-1.5 rounded hover:bg-red-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
              리뷰 작성하기
            </button>
          </div>
        </div>

        {/* 시청 통계 */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            📊 이번 달 시청 통계
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">총 시청 시간</p>
              <p className="text-2xl font-bold text-blue-600">48시간</p>
              <p className="text-xs text-gray-500 mt-1">지난 달 대비 +12%</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-gray-600 mb-1">완료한 콘텐츠</p>
              <p className="text-2xl font-bold text-green-600">
                {allPrograms.filter(p => p.progress === 100).length}개
              </p>
              <p className="text-xs text-gray-500 mt-1">시청 완료율 80%</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
              <p className="text-sm text-gray-600 mb-1">작성한 리뷰</p>
              <p className="text-2xl font-bold text-purple-600">{myReviews.length}개</p>
              <p className="text-xs text-gray-500 mt-1">평균 별점 {(myReviews.reduce((sum, r) => sum + r.rating, 0) / myReviews.length).toFixed(1)}점</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 border border-pink-200">
              <p className="text-sm text-gray-600 mb-1">최애 장르</p>
              <p className="text-2xl font-bold text-pink-600">
                {favoriteShows.length > 0 
                  ? favoriteShows.reduce((acc, show) => {
                      acc[show.genre] = (acc[show.genre] || 0) + 1;
                      return acc;
                    }, {}) && Object.entries(favoriteShows.reduce((acc, show) => {
                      acc[show.genre] = (acc[show.genre] || 0) + 1;
                      return acc;
                    }, {})).sort((a, b) => b[1] - a[1])[0][0]
                  : '드라마'
                }
              </p>
              <p className="text-xs text-gray-500 mt-1">전체의 35%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;