// src/pages/YouTubeDetailPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Eye } from 'lucide-react';
import { youtubeVideos, youtubeChannels } from '../../data/programs';

const YouTubeDetailPage = () => {
  const navigate = useNavigate();
  const [selectedChannel, setSelectedChannel] = useState('전체');

  // 채널별 필터링
  const filteredVideos = selectedChannel === '전체'
    ? youtubeVideos
    : youtubeVideos.filter(v => v.channelName === selectedChannel);

  // 최신 순으로 정렬 (이미 최신순이지만 명시적으로)
  const sortedVideos = [...filteredVideos];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate('/main')}
            className="flex items-center text-white hover:text-gray-200 mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2" />
            메인으로 돌아가기
          </button>
          <h1 className="text-4xl font-bold flex items-center">
            <span className="text-5xl mr-3">▶️</span>
            YouTube
          </h1>
          <p className="text-white/90 mt-2">구독 채널의 최신 영상</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 채널 필터 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">채널 필터</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedChannel('전체')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedChannel === '전체'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              전체
            </button>
            {youtubeChannels.map((channel) => (
              <button
                key={channel.name}
                onClick={() => setSelectedChannel(channel.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedChannel === channel.name
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {channel.name}
              </button>
            ))}
          </div>
        </div>

        {/* 영상 그리드 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedChannel === '전체' ? '최신 영상' : `${selectedChannel}의 영상`}
            <span className="text-base font-normal text-gray-500 ml-2">
              ({sortedVideos.length}개)
            </span>
          </h2>

          {sortedVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer group"
                >
                  {/* 썸네일 */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // 이미 placeholder로 바뀐 경우 다시 시도하지 않음
                        if (!e.target.src.includes('data:image')) {
                          e.target.onerror = null; // 무한 루프 방지
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="180"%3E%3Crect fill="%23fee2e2" width="320" height="180"/%3E%3Ctext fill="%23dc2626" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EYouTube%3C/text%3E%3C/svg%3E';
                        }
                      }}
                    />
                    {/* 재생 오버레이 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
                    </div>
                    {/* 재생 시간 */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* 영상 정보 */}
                  <div className="p-3">
                    {/* 제목 */}
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight">
                      {video.title}
                    </h3>

                    {/* 채널명 */}
                    <p className="text-xs text-gray-600 mb-2">
                      {video.channelName}
                    </p>

                    {/* 조회수 & 업로드 시간 */}
                    <div className="flex items-center text-xs text-gray-500 space-x-2">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>{video.views}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{video.uploadTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">영상이 없습니다.</p>
            </div>
          )}
        </div>

        {/* 구독 채널 섹션 */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">구독 중인 채널</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {youtubeChannels.map((channel, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedChannel(channel.name)}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-gray-200">
                  <img
                    src={channel.image}
                    alt={channel.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80/fee2e2/dc2626?text=YT';
                    }}
                  />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{channel.name}</p>
                <p className="text-xs text-gray-500">{channel.subscribers}</p>
                <p className="text-xs text-gray-400">{channel.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeDetailPage;