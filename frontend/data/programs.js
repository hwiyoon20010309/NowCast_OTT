// src/data/programs.js

export const allPrograms = [
  // 🎬 Netflix - 액션
  { title: '내부자들', platform: 'Netflix', genre: '액션', rating: 8.5, image: '/programs/netflix_insiders.png' },
  { title: '범죄의 재구성', platform: 'Netflix', genre: '액션', rating: 8.3, image: '/programs/netflix_crime.png' },
  { title: '악인전', platform: 'Netflix', genre: '액션', rating: 8.1, image: '/programs/netflix_villain.png' },

  // 🎬 Netflix - 스릴
  { title: '오징어 게임', platform: 'Netflix', genre: '스릴러', rating: 9.2, image: '/programs/netflix_ojingeo.png' },
  { title: '킹덤', platform: 'Netflix', genre: '스릴러', rating: 9.0, image: '/programs/netflix_kingdom.png' },
  { title: '지금 우리 학교는', platform: 'Netflix', genre: '스릴러', rating: 8.6, image: '/programs/netflix_school.png' },

  // 🎬 Netflix - 로맨스
  { title: '사랑의 불시착', platform: 'Netflix', genre: '로맨스', rating: 8.7, image: '/programs/netflix_crashlove.png' },
  { title: '스물다섯 스물하나', platform: 'Netflix', genre: '로맨스', rating: 8.4, image: '/programs/netflix_2521.png' },
  { title: '갯마을 차차차', platform: 'Netflix', genre: '로맨스', rating: 8.6, image: '/programs/netflix_chachacha.png' },

  // 🎬 Netflix - 드라마
  { title: '슬기로운 의사생활', platform: 'Netflix', genre: '드라마', rating: 9.4, image: '/programs/netflix_hospital.png' },
  { title: '나의 해방일지', platform: 'Netflix', genre: '드라마', rating: 8.8, image: '/programs/netflix_liberation.png' },
  { title: '이태원 클라쓰', platform: 'Netflix', genre: '드라마', rating: 8.5, image: '/programs/netflix_itaewon.png' },

  // 🎬 Netflix - SF
  { title: '스위트홈', platform: 'Netflix', genre: 'SF', rating: 8.4, image: '/programs/netflix_sweethome.png' },
  { title: '고요의 바다', platform: 'Netflix', genre: 'SF', rating: 7.8, image: '/programs/netflix_silence.png' },
  { title: '마이네임', platform: 'Netflix', genre: 'SF', rating: 8.1, image: '/programs/netflix_myname.png' },

  // 🎬 Netflix - 코미디
  { title: '피지컬: 100', platform: 'Netflix', genre: '코미디', rating: 8.3, image: '/programs/netflix_physical100.png' },
  { title: '좀비버스', platform: 'Netflix', genre: '코미디', rating: 7.5, image: '/programs/netflix_zombiebus.png' },
  { title: '범인은 바로 너!', platform: 'Netflix', genre: '코미디', rating: 8.2, image: '/programs/netflix_mystery.png' },

  // 🎬 Disney+ - 액션
  { title: '무빙', platform: 'Disney+', genre: '액션', rating: 9.3, image: '/programs/disney_moving.png' },
  { title: '카지노', platform: 'Disney+', genre: '액션', rating: 8.0, image: '/programs/disney_casino.png' },
  { title: '강철부대', platform: 'Disney+', genre: '액션', rating: 8.2, image: '/programs/disney_army.png' },

  // 🎬 Disney+ - SF
  { title: '로키 시즌2', platform: 'Disney+', genre: 'SF', rating: 8.5, image: '/programs/disney_loki.png' },
  { title: '스타워즈: 안도르', platform: 'Disney+', genre: 'SF', rating: 8.8, image: '/programs/disney_andor.png' },
  { title: '더 마블스', platform: 'Disney+', genre: 'SF', rating: 7.9, image: '/programs/disney_marvels.png' },

  // 🎬 Wavve - 액션
  { title: '범죄도시', platform: 'Wavve', genre: '액션', rating: 8.5, image: '/programs/wavve_crimecity.png' },
  { title: '신의 한 수', platform: 'Wavve', genre: '액션', rating: 8.1, image: '/programs/wavve_godmove.png' },
  { title: '강철비', platform: 'Wavve', genre: '액션', rating: 8.0, image: '/programs/wavve_steelrain.png' },

  // 🎬 Tving - 액션
  { title: '방과후 전쟁활동', platform: 'Tving', genre: '액션', rating: 8.4, image: '/programs/tving_afterwar.png' },
  { title: '아일랜드', platform: 'Tving', genre: '액션', rating: 8.1, image: '/programs/tving_island.png' },
  { title: '더 로드', platform: 'Tving', genre: '스릴러', rating: 8.0, image: '/programs/tving_road.png' },

  // 🎬 Tving - 로맨스
  { title: '환승연애', platform: 'Tving', genre: '로맨스', rating: 9.4, image: '/programs/tving_love.png' }
];

export const genres = ['액션', '로맨스', '코미디', '스릴러', '드라마', 'SF'];

export const platformColors = {
  Netflix: 'from-red-600 to-red-700',
  'Disney+': 'from-blue-600 to-blue-700',
  Wavve: 'from-sky-500 to-blue-600',
  Tving: 'from-pink-600 to-red-600',
};
