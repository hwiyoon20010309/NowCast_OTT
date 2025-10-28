// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/Mainpage';
import MyPage from './pages/Mypage';
import OTTDetailPage from './pages/OTTDetailPage';
import SubscriptionPage from './pages/SubscriptionPage';
import ActivityPage from './pages/ActivityPage';
import YouTubeDetailPage from './pages/YouTubeDetailPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route 
        path="/login" 
        element={
          isLoggedIn ? <Navigate to="/main" /> : <LoginPage onLogin={handleLogin} />
        } 
      />
      
      {/* 회원가입 페이지 */}
      <Route path="/signup" element={<SignupPage />} />
      
      {/* 메인 페이지 */}
      <Route 
        path="/main" 
        element={
          isLoggedIn ? <MainPage onLogout={handleLogout} /> : <Navigate to="/login" />
        } 
      />
      
      {/* 마이 페이지 */}
      <Route 
        path="/mypage" 
        element={
          isLoggedIn ? <MyPage onLogout={handleLogout} /> : <Navigate to="/login" />
        } 
      />
      
      {/* 구독 관리 페이지 */}
      <Route 
        path="/mypage/subscription" 
        element={
          isLoggedIn ? <SubscriptionPage /> : <Navigate to="/login" />
        } 
      />
      
      {/* 나의 활동 페이지 */}
      <Route 
        path="/mypage/activity" 
        element={
          isLoggedIn ? <ActivityPage /> : <Navigate to="/login" />
        } 
      />
      
      {/* OTT 상세 페이지 */}
      <Route 
        path="/ott/:platform" 
        element={
          isLoggedIn ? <OTTDetailPage /> : <Navigate to="/login" />
        } 
      />
      
      {/* YouTube 상세 페이지 */}
      <Route 
        path="/youtube" 
        element={
          isLoggedIn ? <YouTubeDetailPage /> : <Navigate to="/login" />
        } 
      />
      
      {/* 기본 리다이렉트 */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;