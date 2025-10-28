// src/components/pages/ActivityDetailPage.jsx
import React from 'react';
import { Heart, MessageSquare, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ActivityDetailPage = () => {
  const navigate = useNavigate();

  const favoriteShows = [
    { title: '환승연애', platform: 'Tving', image: '/programs/tving_love.png' },
    { title: '슬기로운 의사생활', platform: 'Netflix', image: '/programs/netflix_hospital.png' },
    { title: '범죄도시', platform: 'Wavve', image: '/programs/wavve_crimecity.png' },
  ];

  const myReviews = [
    { title: '무빙', review: '스토리도 좋고 연출도 훌륭해요!', rating: 5, platform: 'Disney+' },
    { title: '더 글로리', review: '몰입감이 장난 아니었어요.', rating: 4.8, platform: 'Netflix' },
  ];

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
        {/* 관심 프로그램 */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Heart className="mr-2 text-pink-500" /> 나의 관심 프로그램
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {favoriteShows.map((show, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 border border-gray-100 hover:bg-gray-100 transition">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-16 h-24 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{show.title}</p>
                  <p className="text-gray-500 text-xs">{show.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 내가 쓴 리뷰 */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <MessageSquare className="mr-2 text-blue-600" /> 내가 쓴 리뷰
          </h3>
          <div className="space-y-4">
            {myReviews.map((review, idx) => (
              <div key={idx} className="border border-gray-100 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex justify-between mb-2">
                  <p className="font-semibold text-gray-800">{review.title}</p>
                  <p className="text-yellow-500 text-sm">⭐ {review.rating}</p>
                </div>
                <p className="text-gray-700 text-sm mb-1">{review.review}</p>
                <p className="text-gray-400 text-xs">{review.platform}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActivityDetailPage;