// src/App.jsx
import React, { useState } from 'react';
import LoginPage from './components/pages/LoginPage.jsx';
import InfoPage from './components/pages/InfoPage.jsx';
import DetailPage from './components/pages/DetailPage.jsx';
import MainPage from './components/pages/MainPage.jsx';
import MyPage from './components/pages/MyPage.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [userData, setUserData] = useState({
    name: '',
    preferences: [],
    watchHistory: []
  });

  // 페이지 전환 핸들러
  const handleLogin = () => {
    setCurrentPage('info');
  };

  const handleNext = () => {
    setCurrentPage('detail');
  };

  const handleStart = () => {
    setCurrentPage('main');
  };

  const handleNavigateToMyPage = () => {
    setCurrentPage('mypage');
  };

  const handleNavigateToMain = () => {
    setCurrentPage('main');
  };

  // 페이지 렌더링
  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'info':
        return <InfoPage onNext={handleNext} />;
      case 'detail':
        return <DetailPage onStart={handleStart} />;
      case 'main':
        return <MainPage onNavigateToMyPage={handleNavigateToMyPage} />;
      case 'mypage':
        return <MyPage onNavigateToMain={handleNavigateToMain} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

export default App;