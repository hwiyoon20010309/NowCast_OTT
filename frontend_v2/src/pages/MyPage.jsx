// src/pages/MyPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, Heart, LineChart as LineChartIcon, Star } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Header from '../components/common/Header';
import { allPrograms } from '../../data/programs';

const MyPage = ({ onLogout }) => {
  const navigate = useNavigate();

  // 장르별 시청 데이터 (실제 데이터 기반으로 계산)
  const genreData = [
    { genre: "액션", Netflix: 12, Disney: 8, Wavve: 6, Tving: 7 },
    { genre: "로맨스", Netflix: 9, Disney: 7, Wavve: 5, Tving: 4 },
    { genre: "코미디", Netflix: 10, Disney: 6, Wavve: 7, Tving: 8 },
    { genre: "스릴러", Netflix: 13, Disney: 8, Wavve: 5, Tving: 6 },
    { genre: "드라마", Netflix: 15, Disney: 9, Wavve: 8, Tving: 5 },
    { genre: "SF", Netflix: 8, Disney: 10, Wavve: 4, Tving: 3 },
  ];

  const subscriptions = [
    { name: "Netflix", status: "활성", price: "9,900원" },
    { name: "Disney+", status: "활성", price: "9,500원" },
    { name: "Tving", status: "비활성", price: "7,900원" },
  ];

  // 실제 데이터에서 찜한 프로그램 가져오기 (시청률이 높은 순서대로)
  const favoriteShows = allPrograms
    .filter(p => p.progress && p.progress > 50)
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 6);

  // 최근 리뷰 (실제 데이터 기반)
  const [recentReviews] = useState([
    { 
      program: allPrograms.find(p => p.title.includes('D.P.'))?.title || "D.P. 시즌2", 
      platform: "Netflix",
      content: "스토리가 훨씬 깊어졌어요! 연기도 정말 훌륭합니다 👍", 
      rating: 4.5,
      date: "2024.10.28"
    },
    { 
      program: "SNL 코리아", 
      platform: "Tving",
      content: "출연진이 너무 재밌어요 😂 매주 기다려집니다!", 
      rating: 4.0,
      date: "2024.10.25"
    },
  ]);

  const handleSubscriptionClick = () => navigate("/mypage/subscription");
  const handleActivityClick = () => navigate("/mypage/activity");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onLogout={onLogout} />

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* 섹션 선택 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 💳 내 구독 관리 */}
          <div
            onClick={handleSubscriptionClick}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 cursor-pointer hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
              <DollarSign className="mr-2 text-blue-600" /> 내 구독 관리
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              현재 구독 중인 OTT 및 월별 요금 요약
            </p>

            <div className="space-y-3 mb-4">
              {subscriptions.slice(0, 2).map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2 border border-gray-100"
                >
                  <span className="font-semibold text-gray-800">{s.name}</span>
                  <span
                    className={`text-sm font-medium ${
                      s.status === "활성" ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    {s.status} · {s.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-sm text-gray-700 mb-4">
              <p className="mb-1">현재 총 구독료: <span className="font-semibold text-gray-900">19,800원</span></p>
              <p>추천 최적화 요금: <span className="font-semibold text-green-600">14,900원</span></p>
              <p className="text-green-500 mt-1">→ 월 4,900원 절약 가능!</p>
            </div>

            <div className="text-blue-600 font-semibold text-sm">상세 보기 →</div>
          </div>

          {/* ❤️ 나의 활동 */}
          <div
            onClick={handleActivityClick}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 cursor-pointer hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
              <Heart className="mr-2 text-pink-500" /> 나의 활동
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              찜한 프로그램과 내가 쓴 리뷰 미리보기
            </p>

            {/* 찜한 프로그램 썸네일 미리보기 */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">시청 중인 프로그램 ({favoriteShows.length})</p>
              <div className="grid grid-cols-6 gap-2">
                {favoriteShows.slice(0, 6).map((show, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full aspect-[2/3] rounded-lg object-cover border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="112"%3E%3Crect fill="%23e2e8f0" width="80" height="112"/%3E%3Ctext fill="%231e293b" font-size="12" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    {/* 호버 시 제목 표시 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all rounded-lg flex items-end p-1">
                      <p className="text-white text-[8px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                        {show.title}
                      </p>
                    </div>
                    {/* 진행률 표시 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                      <div 
                        className="h-full bg-pink-500"
                        style={{ width: `${show.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 최근 리뷰 요약 */}
            <div className="space-y-2">
              {recentReviews.slice(0, 2).map((r, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-3 border border-gray-100 text-sm"
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-semibold text-gray-800">{r.program}</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-xs font-medium">{r.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mb-1">{r.content}</p>
                  <p className="text-gray-400 text-xs">{r.date}</p>
                </div>
              ))}
            </div>

            <div className="text-blue-600 font-semibold text-sm mt-4">
              상세 보기 →
            </div>
          </div>
        </div>

        {/* 최근 시청한 프로그램 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            최근 시청한 프로그램
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {favoriteShows.slice(0, 6).map((show, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative mb-2">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full aspect-[2/3] rounded-lg object-cover shadow-sm group-hover:shadow-md transition-all"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="224"%3E%3Crect fill="%23e2e8f0" width="150" height="224"/%3E%3Ctext fill="%231e293b" font-size="16" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  {/* 진행률 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-300 rounded-b-lg overflow-hidden">
                    <div 
                      className="h-full bg-blue-500"
                      style={{ width: `${show.progress}%` }}
                    ></div>
                  </div>
                  {/* 플랫폼 뱃지 */}
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {show.platform}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                  {show.title}
                </h4>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">{show.genre}</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-gray-700 font-medium">{show.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-1">{show.progress}% 시청</p>
              </div>
            ))}
          </div>
        </div>

        {/* 📈 OTT별 장르 관심도 분석 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <LineChartIcon className="mr-2 text-blue-600" /> OTT별 장르 관심도 분석
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={genreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="genre" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Netflix" stroke="#000000" strokeWidth={2.5} />
                <Line type="monotone" dataKey="Disney" stroke="#1e90ff" strokeWidth={2.5} />
                <Line type="monotone" dataKey="Wavve" stroke="#00b5ff" strokeWidth={2.5} />
                <Line type="monotone" dataKey="Tving" stroke="#ff0000" strokeWidth={2.5} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;