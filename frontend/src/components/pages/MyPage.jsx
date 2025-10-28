// src/components/pages/MyPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, Heart, LineChart as LineChartIcon } from "lucide-react";
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

const MyPage = () => {
  const navigate = useNavigate();

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

  const favoriteShows = [
    { title: "슬기로운 의사생활", platform: "Netflix", image: "/programs/netflix_hospital.png" },
    { title: "환승연애", platform: "Tving", image: "/programs/tving_love.png" },
    { title: "무한도전", platform: "Wavve", image: "/programs/wavve_mudo.png" },
  ];

  const recentReviews = [
    { program: "D.P. 시즌2", content: "스토리가 훨씬 깊어졌어요!", rating: 4.5 },
    { program: "SNL 코리아", content: "출연진이 너무 재밌어요 😂", rating: 4.0 },
  ];

  const handleSubscriptionClick = () => navigate("/mypage/subscription");
  const handleActivityClick = () => navigate("/mypage/activity");
  const handleGoMain = () => navigate("/main");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ✅ 네비게이션 */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">📺 NowCast+</h1>
          <div className="flex space-x-6">
            <button
              onClick={handleGoMain}
              className="text-gray-500 hover:text-blue-600 transition"
            >
              메인 페이지
            </button>
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600">
              마이페이지
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ 본문 */}
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

            {/* ✅ 구독 중인 OTT 목록 미리보기 */}
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

            {/* ✅ 비용 시뮬레이터 요약 */}
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

            {/* ✅ 찜한 프로그램 썸네일 미리보기 */}
            <div className="flex space-x-3 overflow-x-auto mb-4">
              {favoriteShows.slice(0, 3).map((show, idx) => (
                <img
                  key={idx}
                  src={show.image}
                  alt={show.title}
                  className="w-20 h-28 rounded-lg object-cover border border-gray-200 shadow-sm"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/80x112/e2e8f0/1e293b?text=No+Image";
                  }}
                />
              ))}
            </div>

            {/* ✅ 최근 리뷰 요약 */}
            <div className="space-y-2">
              {recentReviews.slice(0, 2).map((r, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-3 border border-gray-100 text-sm"
                >
                  <p className="font-semibold text-gray-800">{r.program}</p>
                  <p className="text-gray-600">{r.content}</p>
                  <p className="text-yellow-500 font-medium mt-1">★ {r.rating}</p>
                </div>
              ))}
            </div>

            <div className="text-blue-600 font-semibold text-sm mt-4">
              상세 보기 →
            </div>
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
