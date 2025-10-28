// src/data/programs.js

export const allPrograms = [
  // 🎬 Netflix - 액션
  { title: '내부자들', platform: 'Netflix', genre: '액션', rating: 8.5, image: '/programs/netflix_insiders.png', progress: 75 },
  { title: '범죄의 재구성', platform: 'Netflix', genre: '액션', rating: 8.3, image: '/programs/netflix_crime.png', progress: 45 },
  { title: '악인전', platform: 'Netflix', genre: '액션', rating: 8.1, image: '/programs/netflix_villain.png', progress: 30 },

  // 🎬 Netflix - 스릴러
  { title: '오징어 게임', platform: 'Netflix', genre: '스릴러', rating: 9.2, image: '/programs/netflix_ojingeo.png', progress: 100 },
  { title: '킹덤', platform: 'Netflix', genre: '스릴러', rating: 9.0, image: '/programs/netflix_kingdom.png', progress: 60 },
  { title: '지금 우리 학교는', platform: 'Netflix', genre: '스릴러', rating: 8.6, image: '/programs/netflix_school.png', progress: 25 },

  // 🎬 Netflix - 로맨스
  { title: '사랑의 불시착', platform: 'Netflix', genre: '로맨스', rating: 8.7, image: '/programs/netflix_crashlove.png', progress: 90 },
  { title: '스물다섯 스물하나', platform: 'Netflix', genre: '로맨스', rating: 8.4, image: '/programs/netflix_2521.png', progress: 55 },
  { title: '갯마을 차차차', platform: 'Netflix', genre: '로맨스', rating: 8.6, image: '/programs/netflix_chachacha.png', progress: 40 },

  // 🎬 Netflix - 드라마
  { title: '슬기로운 의사생활', platform: 'Netflix', genre: '드라마', rating: 9.4, image: '/programs/netflix_hospital.png', progress: 85 },
  { title: '나의 해방일지', platform: 'Netflix', genre: '드라마', rating: 8.8, image: '/programs/netflix_liberation.png', progress: 70 },
  { title: '이태원 클라쓰', platform: 'Netflix', genre: '드라마', rating: 8.5, image: '/programs/netflix_itaewon.png', progress: 50 },

  // 🎬 Netflix - SF
  { title: '스위트홈', platform: 'Netflix', genre: 'SF', rating: 8.4, image: '/programs/netflix_sweethome.png', progress: 35 },
  { title: '고요의 바다', platform: 'Netflix', genre: 'SF', rating: 7.8, image: '/programs/netflix_silence.png', progress: 20 },
  { title: '마이네임', platform: 'Netflix', genre: 'SF', rating: 8.1, image: '/programs/netflix_myname.png', progress: 65 },

  // 🎬 Netflix - 코미디
  { title: '피지컬: 100', platform: 'Netflix', genre: '코미디', rating: 8.3, image: '/programs/netflix_physical100.png', progress: 80 },
  { title: '좀비버스', platform: 'Netflix', genre: '코미디', rating: 7.5, image: '/programs/netflix_zombiebus.png', progress: 45 },
  { title: '범인은 바로 너!', platform: 'Netflix', genre: '코미디', rating: 8.2, image: '/programs/netflix_mystery.png', progress: 30 },

  // ✨ Disney+ - 액션
  { title: '무빙', platform: 'Disney+', genre: '액션', rating: 9.3, image: '/programs/disney_moving.png', progress: 90 },
  { title: '카지노', platform: 'Disney+', genre: '액션', rating: 8.0, image: '/programs/disney_casino.png', progress: 60 },
  { title: '강철부대', platform: 'Disney+', genre: '액션', rating: 8.2, image: '/programs/disney_army.png', progress: 40 },

  // ✨ Disney+ - SF
  { title: '로키 시즌2', platform: 'Disney+', genre: 'SF', rating: 8.5, image: '/programs/disney_loki.png', progress: 75 },
  { title: '스타워즈: 안도르', platform: 'Disney+', genre: 'SF', rating: 8.8, image: '/programs/disney_andor.png', progress: 50 },
  { title: '더 마블스', platform: 'Disney+', genre: 'SF', rating: 7.9, image: '/programs/disney_marvels.png', progress: 30 },

  // 🌊 Wavve - 액션
  { title: '범죄도시', platform: 'Wavve', genre: '액션', rating: 8.5, image: '/programs/wavve_crimecity.png', progress: 85 },
  { title: '신의 한 수', platform: 'Wavve', genre: '액션', rating: 8.1, image: '/programs/wavve_godmove.png', progress: 55 },
  { title: '강철비', platform: 'Wavve', genre: '액션', rating: 8.0, image: '/programs/wavve_steelrain.png', progress: 40 },

  // 🌊 Wavve - 예능
  { title: '무한도전', platform: 'Wavve', genre: '예능', rating: 9.5, image: '/programs/wavve_mudo.png', progress: 90 },

  // 📺 Tving - 액션
  { title: '방과후 전쟁활동', platform: 'Tving', genre: '액션', rating: 8.4, image: '/programs/tving_afterwar.png', progress: 70 },
  { title: '아일랜드', platform: 'Tving', genre: '액션', rating: 8.1, image: '/programs/tving_island.png', progress: 45 },
  { title: '더 로드', platform: 'Tving', genre: '스릴러', rating: 8.0, image: '/programs/tving_road.png', progress: 35 },

  // 📺 Tving - 로맨스
  { title: '환승연애', platform: 'Tving', genre: '로맨스', rating: 9.4, image: '/programs/tving_love.png', progress: 80 },
];

// ▶️ YouTube 채널 데이터
export const youtubeChannels = [
  { name: '태요미네', subscribers: '240만', category: '브이로그', image: '/youtube/taeyomine.png' },
  { name: '리쥬라이크', subscribers: '185만', category: '뷰티/라이프', image: '/youtube/reezulike.png' },
  { name: '걍민경', subscribers: '98만', category: '브이로그', image: '/youtube/minkyung.png' },
  { name: '비긴어게인', subscribers: '520만', category: '음악', image: '/youtube/beginagain.png' },
];

// ▶️ YouTube 영상 데이터
export const youtubeVideos = [
  // 태요미네 영상
  { 
    id: 1, 
    channelName: '태요미네', 
    title: '태하와 예린이의 주말 vlog 🛵 | 서울 나들이', 
    thumbnail: '/youtube/videos/taeyomine_1.jpg', 
    views: '45만', 
    uploadTime: '3일 전', 
    duration: '12:34'
  },
  { 
    id: 2, 
    channelName: '태요미네', 
    title: '서울 카페 투어 ☕ | 핫플 10곳 다녀왔어요', 
    thumbnail: '/youtube/videos/taeyomine_2.jpg', 
    views: '32만', 
    uploadTime: '1주 전', 
    duration: '15:22'
  },
  { 
    id: 3, 
    channelName: '태요미네', 
    title: '제주도 힐링 여행 🌴 | 숙소 추천', 
    thumbnail: '/youtube/videos/taeyomine_3.jpg', 
    views: '58만', 
    uploadTime: '2주 전', 
    duration: '18:45'
  },
  { 
    id: 4, 
    channelName: '태요미네', 
    title: '홈카페 브이로그 | 라떼아트 배우기', 
    thumbnail: '/youtube/videos/taeyomine_4.jpg', 
    views: '28만', 
    uploadTime: '3주 전', 
    duration: '10:15'
  },

  // 리쥬라이크 영상
  { 
    id: 5, 
    channelName: '리쥬라이크', 
    title: '엄마의 눈물 육아전쟁 😭 | 리쥬라이크 일상 브이로그', 
    thumbnail: '/youtube/videos/reezulike_1.jpg', 
    views: '67만', 
    uploadTime: '1일 전', 
    duration: '14:20'
  },
  { 
    id: 6, 
    channelName: '리쥬라이크', 
    title: '유준이가 아파요.. 🥲 | 육아 일상 공유', 
    thumbnail: '/youtube/videos/reezulike_2.jpg', 
    views: '52만', 
    uploadTime: '5일 전', 
    duration: '11:30'
  },
  { 
    id: 7, 
    channelName: '리쥬라이크', 
    title: '부산여행 브이로그 🌊 | 해운대 맛집 탐방', 
    thumbnail: '/youtube/videos/reezulike_3.jpg', 
    views: '43만', 
    uploadTime: '1주 전', 
    duration: '16:45'
  },
  { 
    id: 8, 
    channelName: '리쥬라이크', 
    title: '엄마만 좋아하는 아기 | 리쥬라이크 육아일상', 
    thumbnail: '/youtube/videos/reezulike_4.jpg', 
    views: '38만', 
    uploadTime: '2주 전', 
    duration: '13:55'
  },

  // 걍민경 영상
  { 
    id: 9, 
    channelName: '걍민경', 
    title: '일상 브이로그 📸 | 평범한 하루', 
    thumbnail: '/youtube/videos/minkyung_1.jpg', 
    views: '29만', 
    uploadTime: '2일 전', 
    duration: '9:40'
  },
  { 
    id: 10, 
    channelName: '걍민경', 
    title: '서울 맛집 투어 🍽️ | 혼밥 추천', 
    thumbnail: '/youtube/videos/minkyung_2.jpg', 
    views: '35만', 
    uploadTime: '6일 전', 
    duration: '12:10'
  },
  { 
    id: 11, 
    channelName: '걍민경', 
    title: '집 꾸미기 브이로그 🏠 | 방 정리', 
    thumbnail: '/youtube/videos/minkyung_3.jpg', 
    views: '41만', 
    uploadTime: '1주 전', 
    duration: '15:30'
  },
  { 
    id: 12, 
    channelName: '걍민경', 
    title: '주말 루틴 | 느긋한 일요일', 
    thumbnail: '/youtube/videos/minkyung_4.jpg', 
    views: '26만', 
    uploadTime: '2주 전', 
    duration: '11:25'
  },

  // 비긴어게인 영상
  { 
    id: 13, 
    channelName: '비긴어게인', 
    title: '버스킹 라이브 🎤 | 홍대 거리 공연', 
    thumbnail: '/youtube/videos/beginagain_1.jpg', 
    views: '120만', 
    uploadTime: '1일 전', 
    duration: '8:50'
  },
  { 
    id: 14, 
    channelName: '비긴어게인', 
    title: '아이유 커버 🎵 | Love poem', 
    thumbnail: '/youtube/videos/beginagain_2.jpg', 
    views: '95만', 
    uploadTime: '4일 전', 
    duration: '4:25'
  },
  { 
    id: 15, 
    channelName: '비긴어게인', 
    title: '뉴욕 버스킹 투어 🗽 | 해외 공연', 
    thumbnail: '/youtube/videos/beginagain_3.jpg', 
    views: '150만', 
    uploadTime: '1주 전', 
    duration: '20:15'
  },
  { 
    id: 16, 
    channelName: '비긴어게인', 
    title: '어쿠스틱 세션 🎸 | 신청곡 라이브', 
    thumbnail: '/youtube/videos/beginagain_4.jpg', 
    views: '88만', 
    uploadTime: '2주 전', 
    duration: '14:30'
  },
];

export const genres = ['액션', '로맨스', '코미디', '스릴러', '드라마', 'SF', '예능'];

export const platformColors = {
  Netflix: 'from-red-600 to-red-700',
  'Disney+': 'from-blue-600 to-blue-700',
  Wavve: 'from-sky-500 to-blue-600',
  Tving: 'from-pink-600 to-red-600',
};