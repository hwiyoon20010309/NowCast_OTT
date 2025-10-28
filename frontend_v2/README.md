# Media Hub - 콘텐츠 통합 탐색 허브

한 번의 로그인으로 모든 OTT 플랫폼과 YouTube의 시청 기록, 추천, 구독 채널을 한눈에 확인하고 관리하는 통합 미디어 대시보드입니다.

## 주요 기능

### 🎬 통합 대시보드
- Netflix, Disney+, TVING, Wavve, YouTube 등 주요 OTT 서비스 통합
- 모든 플랫폼의 시청 중인 콘텐츠를 한 화면에서 확인
- 각 서비스의 추천 콘텐츠 표시

### 👤 마이페이지
- 연결된 서비스 관리
- 시청 기록 확인
- 개인 설정 및 알림 관리

### ⚙️ 관리자 페이지
- 서비스 상태 모니터링
- 사용자 통계 확인
- API 연동 상태 관리
- 활동 로그 조회

## 기술 스택

- React 18
- React Router v6
- CSS3 (모던 그라디언트 & 애니메이션)
- Mock API (실제 구현시 백엔드 API 연동 필요)

## 설치 및 실행
```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm start

# 빌드
npm run build
```

## 프로젝트 구조
```
src/
├── components/
│   ├── common/          # 공통 컴포넌트
│   │   ├── Header.jsx
│   │   ├── ContentCard.jsx
│   │   └── ContentRow.jsx
│   ├── sections/        # 서비스별 섹션
│   │   ├── NetflixSection.jsx
│   │   ├── DisneySection.jsx
│   │   ├── TvingSection.jsx
│   │   ├── WavveSection.jsx
│   │   └── YouTubeSection.jsx
│   └── pages/           # 페이지 컴포넌트
│       ├── MainPage.jsx
│       ├── MyPage.jsx
│       └── AdminPage.jsx
├── utils/
│   ├── api.js          # API 유틸리티
│   └── App.js          # 메인 App 컴포넌트
├── index.css           # 글로벌 스타일
└── main.jsx            # 진입점
```

## 향후 개선 사항

- [ ] 실제 OTT API 연동
- [ ] 사용자 인증 시스템
- [ ] 실시간 알림 기능
- [ ] 콘텐츠 검색 기능
- [ ] 찜하기 / 시청 목록 관리
- [ ] 다크/라이트 테마 전환
- [ ] 모바일 앱 버전

## 라이센스

MIT