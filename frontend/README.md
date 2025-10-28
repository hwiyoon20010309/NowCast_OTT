# NowCast_OTT

# NowCast+ 프로젝트 구조

## 📁 전체 디렉토리 구조

```
nowcast-plus/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── pages/
│   │       ├── LoginPage.jsx          # 로그인 페이지
│   │       ├── InfoPage.jsx           # 회원가입 정보 입력
│   │       ├── DetailPage.jsx         # 장르/프로그램 선택
│   │       ├── MainPage.jsx           # 메인 페이지
│   │       └── MyPage.jsx             # 마이페이지
│   ├── data/
│   │   └── programs.js                # 프로그램 데이터
│   ├── utils/
│   │   └── helpers.js                 # 유틸리티 함수
│   ├── App.jsx                        # 메인 앱 컴포넌트
│   ├── main.jsx                       # 앱 진입점
│   └── index.css                      # Tailwind CSS
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 📄 파일별 설명

### 1. **App.jsx** (메인 앱)
- 역할: 전체 앱의 라우팅 및 상태 관리
- State:
  - `currentPage`: 현재 페이지 ('login', 'info', 'detail', 'main', 'mypage')
  - `userData`: 사용자 정보 저장
- Props 전달: 각 페이지에 페이지 전환 함수를 props로 전달

### 2. **LoginPage.jsx**
- Props: `onLogin` - 로그인 성공 시 호출
- 기능: 이메일/비밀번호 입력, 회원가입 링크

### 3. **InfoPage.jsx**
- Props: `onNext` - 다음 단계로 이동
- 기능: 아이디 입력, SNS 연동 (Google, Kakao, Naver)

### 4. **DetailPage.jsx**
- Props: `onStart` - 메인 페이지로 이동
- State: `selectedGenre` - 선택된 장르
- 기능:
  - 장르 선택 (액션, 로맨스, 코미디, 스릴러, 드라마, SF)
  - 선택한 장르의 프로그램을 OTT별로 그룹화하여 표시
  - 프로그램 좋아요 기능

### 5. **MainPage.jsx**
- Props: `onNavigateToMyPage` - 마이페이지로 이동
- 섹션:
  - OTT 탐색: Netflix, Disney+, Wavve, Tving
  - TV 재널보기: 실시간 방송 목록
  - 맞춤 추천: 추천 콘텐츠 그리드

### 6. **MyPage.jsx**
- Props: `onNavigateToMain` - 메인 페이지로 이동
- 섹션:
  - 내 구독 관리: 현재 구독 중인 OTT 서비스
  - 출석체크/일일 목록: 연속 출석, 오늘의 할일
  - 비용 시뮬레이터: 현재 구독료 vs 최적화 플랜

### 7. **programs.js** (데이터)
- `allPrograms`: 18개 프로그램 배열
- `genres`: 6개 장르 배열
- `platformColors`: OTT별 색상 매핑

### 8. **helpers.js** (유틸리티)
- `groupByPlatform()`: 프로그램을 플랫폼별로 그룹화
- `filterByGenre()`: 장르별 프로그램 필터링

## 🔄 페이지 전환 흐름

```
LoginPage (로그인)
   ↓ onLogin()
InfoPage (회원가입)
   ↓ onNext()
DetailPage (장르 선택)
   ↓ onStart()
MainPage ←→ MyPage
  (onNavigateToMyPage / onNavigateToMain)
```

## 🎨 스타일링

- **Tailwind CSS** 사용
- 주요 스타일:
  - 그라데이션 배경
  - 글래스모피즘 효과 (backdrop-blur)
  - 호버 애니메이션
  - 반응형 그리드 레이아웃

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 📝 추가 설정 파일

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### tailwind.config.js
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 🔧 확장 가능한 부분

1. **상태 관리**: Context API 또는 Zustand로 전역 상태 관리
2. **라우팅**: React Router 추가로 URL 기반 라우팅
3. **API 연동**: 백엔드 서버와 연동하여 실제 데이터 사용
4. **인증**: JWT 토큰 기반 인증 시스템
5. **스토리지**: localStorage 또는 IndexedDB로 데이터 영구 저장