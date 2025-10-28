from fastapi import FastAPI
from app.routers import (
    user_router, subscription_router, review_router,
    auth_router, mypage_router, ott_router, admin_router
)

app = FastAPI(
    title="NowCast+ OTT 콘텐츠 탐색 & 구독 최적화 플랫폼 API",
    description="NowCast+의 전체 페이지(로그인, 메인, 마이페이지, 관리자 페이지)에 대한 REST API 명세서입니다.",
    version="1.0.0"
)

# 기존
app.include_router(user_router.router, prefix="/users", tags=["User"])
app.include_router(subscription_router.router, prefix="/subscriptions", tags=["Subscription"])
app.include_router(review_router.router, prefix="/reviews", tags=["Review"])

# 신규 추가
app.include_router(auth_router.router, prefix="/auth", tags=["Auth (로그인/회원가입)"])
app.include_router(mypage_router.router, prefix="/mypage", tags=["MyPage (내 구독/활동)"])
app.include_router(ott_router.router, prefix="/ott", tags=["OTT 탐색/추천"])
app.include_router(admin_router.router, prefix="/admin", tags=["관리자 페이지"])

@app.get("/", tags=["default"])
def root():
    return {"message": "NowCast+ API 서버가 실행 중입니다 🚀"}
