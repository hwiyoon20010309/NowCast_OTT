// src/components/common/Header.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      onLogout();
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 
          onClick={() => navigate('/main')}
          className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
        >
          📺 NowCast<span className="text-purple-500">+</span>
        </h1>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={() => navigate('/main')}
            className={`transition-all ${
              isActive('/main')
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            메인 페이지
          </button>
          
          <button
            onClick={() => navigate('/mypage')}
            className={`transition-all ${
              isActive('/mypage') || location.pathname.startsWith('/mypage')
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            마이페이지
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-1" />
            로그아웃
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;