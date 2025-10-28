// src/components/pages/AdminPage.jsx
import React, { useState } from 'react';
import {
  BarChart3,
  Film,
  Users,
  MessageSquare,
  Home,
  TrendingUp,
  Activity,
  Edit,
  Trash2,
  PlusCircle,
  XCircle,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const AdminPage = ({ onNavigateToMain }) => {
  const [tab, setTab] = useState('dashboard');

  // 📊 대시보드용 데이터
  const userData = [
    { month: '1월', Netflix: 400, Disney: 300, Wavve: 200, Tving: 250 },
    { month: '2월', Netflix: 450, Disney: 320, Wavve: 180, Tving: 260 },
    { month: '3월', Netflix: 520, Disney: 360, Wavve: 210, Tving: 280 },
    { month: '4월', Netflix: 600, Disney: 390, Wavve: 230, Tving: 300 },
  ];
  const contentsData = [
    { platform: 'Netflix', count: 25 },
    { platform: 'Disney+', count: 18 },
    { platform: 'Wavve', count: 12 },
    { platform: 'Tving', count: 15 },
  ];
  const recentReviews = [
    { user: '김현서', content: '무빙 최고! 다시 보고 싶어요', ott: 'Disney+', rating: 5 },
    { user: '이민지', content: '슬기로운 의사생활 감동이에요 🥲', ott: 'Netflix', rating: 4.8 },
    { user: '박준호', content: '런닝맨 진짜 꿀잼 ㅋㅋ', ott: 'Tving', rating: 4.5 },
  ];
  const recentActivity = [
    { time: '5분 전', action: '새 리뷰 등록: 무빙', user: '김현서' },
    { time: '30분 전', action: '신규 가입', user: '이민지' },
    { time: '2시간 전', action: '프로그램 수정: 슬기로운 의사생활', user: '관리자' },
  ];

 // 🎬 프로그램 관리 상태
const [programs, setPrograms] = useState([
  { id: 1, ott: 'Netflix', title: '오징어 게임', genre: '스릴러', rating: 9.2 },
  { id: 2, ott: 'Disney+', title: '무빙', genre: '액션', rating: 9.3 },
  { id: 3, ott: 'Wavve', title: '빅마우스', genre: '드라마', rating: 8.5 },
  { id: 4, ott: 'Tving', title: '방과후 전쟁활동', genre: '액션', rating: 8.4 },
  { id: 5, ott: 'Netflix', title: '더 글로리', genre: '드라마', rating: 9.0 },
  { id: 6, ott: 'Disney+', title: '카지노', genre: '범죄', rating: 8.2 },
  { id: 7, ott: 'Tving', title: '놀면 뭐하니?', genre: '예능', rating: 8.6 },
  { id: 8, ott: 'Wavve', title: '재벌집 막내아들', genre: '드라마', rating: 8.7 },
  { id: 9, ott: 'Netflix', title: '스위트홈', genre: '호러', rating: 8.4 },
  { id: 10, ott: 'Disney+', title: '로키 시즌2', genre: 'SF', rating: 8.8 },
]);

// 👥 사용자 관리 상태
const [users, setUsers] = useState([
  { id: 1, name: '김현서', email: 'hyunseo@example.com', status: '활성', interest: 8 },
  { id: 2, name: '이민지', email: 'minji@example.com', status: '비활성', interest: 5 },
  { id: 3, name: '박준호', email: 'junho@example.com', status: '활성', interest: 10 },
  { id: 4, name: '최수빈', email: 'subin@example.com', status: '활성', interest: 6 },
  { id: 5, name: '정유진', email: 'yujin@example.com', status: '비활성', interest: 4 },
  { id: 6, name: '홍지훈', email: 'jihoon@example.com', status: '활성', interest: 9 },
  { id: 7, name: '서예린', email: 'yerin@example.com', status: '활성', interest: 7 },
]);

// 📝 리뷰 관리 상태
const [reviews, setReviews] = useState([
  { id: 1, user: '김현서', program: '무빙', content: '진짜 명작이에요! 다시 보고 싶어요.', rating: 5 },
  { id: 2, user: '이민지', program: '슬기로운 의사생활', content: '힐링 그 자체 😭', rating: 4.8 },
  { id: 3, user: '박준호', program: '런닝맨', content: '매주 챙겨봅니다. 꿀잼!', rating: 4.6 },
  { id: 4, user: '최수빈', program: '오징어 게임', content: '몰입감 최고. 시즌2 기대!', rating: 4.9 },
  { id: 5, user: '정유진', program: '더 글로리', content: '배우 연기가 미쳤어요.', rating: 4.7 },
  { id: 6, user: '홍지훈', program: '로키 시즌2', content: '마블 팬으로서 너무 만족!', rating: 4.5 },
  { id: 7, user: '서예린', program: '방과후 전쟁활동', content: '스토리 흥미롭고 액션 굿.', rating: 4.4 },
]);

const [form, setForm] = useState({
  ott: '',
  title: '',
  genre: '',
  rating: '',
});
const [editing, setEditing] = useState(null);

  // 공통 입력 처리
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // 추가 / 수정 저장
  const handleSave = () => {
    if (editing) {
      setPrograms((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...p, ...form } : p))
      );
    } else {
      setPrograms((prev) => [
        ...prev,
        { id: Date.now(), ...form, rating: parseFloat(form.rating) },
      ]);
    }
    setEditing(null);
    setForm({ ott: '', title: '', genre: '', rating: '' });
  };

  // 삭제
  const handleDelete = (id, type) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      if (type === 'program') setPrograms((prev) => prev.filter((p) => p.id !== id));
      if (type === 'user') setUsers((prev) => prev.filter((u) => u.id !== id));
      if (type === 'review') setReviews((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">🎛️ NowCast+ 관리자 페이지</h1>
        <button
          onClick={onNavigateToMain}
          className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
        >
          <Home className="w-5 h-5 mr-1" /> 사용자 페이지로
        </button>
      </header>

      {/* 네비게이션 */}
      <nav className="bg-white border-b border-gray-200 px-8 py-3 flex space-x-8 text-gray-600 text-sm">
        {[
          { id: 'dashboard', label: '📊 대시보드' },
          { id: 'programs', label: '🎬 프로그램 관리' },
          { id: 'users', label: '👥 사용자 관리' },
          { id: 'reviews', label: '📝 리뷰 관리' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`font-semibold hover:text-blue-600 ${
              tab === item.id ? 'text-blue-600 border-b-2 border-blue-600' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-10 space-y-10">
        {/* 📊 대시보드 */}
        {tab === 'dashboard' && (
          <>
            {/* KPI 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[{ icon: <Users />, label: '전체 사용자', value: 1245 },
              { icon: <Film />, label: '등록된 프로그램', value: programs.length },
              { icon: <MessageSquare />, label: '작성된 리뷰', value: reviews.length },
              { icon: <TrendingUp />, label: '월간 방문자', value: 2200 }].map((card, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col items-center">
                  <div className="text-blue-500 mb-2">{card.icon}</div>
                  <p className="text-2xl font-bold">{card.value}</p>
                  <p className="text-gray-500 text-sm">{card.label}</p>
                </div>
              ))}
            </div>

            {/* 사용자 추이 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" /> OTT별 사용자 증가 추이
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Netflix" stroke="#000" />
                  <Line type="monotone" dataKey="Disney" stroke="#1e90ff" />
                  <Line type="monotone" dataKey="Wavve" stroke="#00b5ff" />
                  <Line type="monotone" dataKey="Tving" stroke="#ff0000" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {/* 🎬 프로그램 관리 */}
        {tab === 'programs' && (
          <section>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center">
                <Film className="mr-2 text-blue-600" /> 프로그램 관리
              </h2>
              <button
                onClick={() => setEditing(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <PlusCircle className="w-4 h-4 mr-1" /> 새 프로그램 추가
              </button>
            </div>

            {/* 입력 폼 */}
            <div className="bg-white border rounded-lg p-4 shadow-sm mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['ott', 'title', 'genre', 'rating'].map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                ))}
              </div>
              <div className="mt-3 text-right">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  {editing ? '수정 완료' : '등록'}
                </button>
              </div>
            </div>

            {/* 목록 */}
            <table className="w-full bg-white border-collapse shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-2 px-4 text-left">OTT</th>
                  <th className="py-2 px-4 text-left">제목</th>
                  <th className="py-2 px-4 text-left">장르</th>
                  <th className="py-2 px-4 text-left">평점</th>
                  <th className="py-2 px-4 text-center">관리</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{p.ott}</td>
                    <td className="py-2 px-4">{p.title}</td>
                    <td className="py-2 px-4">{p.genre}</td>
                    <td className="py-2 px-4">{p.rating}</td>
                    <td className="py-2 px-4 text-center space-x-2">
                      <button
                        onClick={() => setEditing(p)}
                        className="text-blue-600 hover:underline flex items-center inline-flex"
                      >
                        <Edit className="w-4 h-4 mr-1" /> 수정
                      </button>
                      <button
                        onClick={() => handleDelete(p.id, 'program')}
                        className="text-red-600 hover:underline flex items-center inline-flex"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> 삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* 👥 사용자 관리 */}
        {tab === 'users' && (
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Users className="mr-2 text-blue-600" /> 사용자 관리
            </h2>
            <table className="w-full bg-white border-collapse shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-2 px-4 text-left">이름</th>
                  <th className="py-2 px-4 text-left">이메일</th>
                  <th className="py-2 px-4 text-left">상태</th>
                  <th className="py-2 px-4 text-center">관심 수</th>
                  <th className="py-2 px-4 text-center">관리</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{u.name}</td>
                    <td className="py-2 px-4">{u.email}</td>
                    <td className="py-2 px-4">{u.status}</td>
                    <td className="py-2 px-4 text-center">{u.interest}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleDelete(u.id, 'user')}
                        className="text-red-600 hover:underline flex items-center inline-flex"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> 삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* 📝 리뷰 관리 */}
        {tab === 'reviews' && (
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MessageSquare className="mr-2 text-blue-600" /> 리뷰 관리
            </h2>
            <table className="w-full bg-white border-collapse shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-2 px-4 text-left">사용자</th>
                  <th className="py-2 px-4 text-left">프로그램</th>
                  <th className="py-2 px-4 text-left">내용</th>
                  <th className="py-2 px-4 text-center">평점</th>
                  <th className="py-2 px-4 text-center">관리</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((r) => (
                  <tr key={r.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{r.user}</td>
                    <td className="py-2 px-4">{r.program}</td>
                    <td className="py-2 px-4">{r.content}</td>
                    <td className="py-2 px-4 text-center">⭐ {r.rating}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleDelete(r.id, 'review')}
                        className="text-red-600 hover:underline flex items-center inline-flex"
                      >
                        <XCircle className="w-4 h-4 mr-1" /> 삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
