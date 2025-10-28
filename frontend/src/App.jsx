// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 페이지 import
import LoginPage from "./components/pages/LoginPage.jsx";
import InfoPage from "./components/pages/InfoPage.jsx";
import DetailPage from "./components/pages/DetailPage.jsx";
import MainPage from "./components/pages/MainPage.jsx";
import MyPage from "./components/pages/MyPage.jsx";
import SubscriptionDetailPage from "./components/pages/SubscriptionDetailPage.jsx";
import ActivityDetailPage from "./components/pages/ActivityDetailPage.jsx";
import AdminPage from "./components/pages/AdminPage.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* ✅ 모든 페이지 라우팅 */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/subscription" element={<SubscriptionDetailPage />} />
          <Route path="/mypage/activity" element={<ActivityDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
