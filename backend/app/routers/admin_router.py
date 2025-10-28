from fastapi import APIRouter

router = APIRouter()

@router.get("/dashboard", summary="대시보드 통계 조회")
def get_dashboard():
    return {
        "total_users": 1523,
        "total_programs": 214,
        "active_subscriptions": 978
    }

@router.get("/users", summary="사용자 관리")
def get_users():
    return [
        {"user_id": 1, "name": "홍길동", "email": "hong@test.com"},
        {"user_id": 2, "name": "이몽룡", "email": "lee@test.com"}
    ]

@router.get("/programs", summary="프로그램 관리")
def get_programs():
    return [
        {"program_id": 1, "title": "슬기로운 의사생활", "platform": "Netflix"},
        {"program_id": 2, "title": "무빙", "platform": "Disney+"}
    ]

@router.get("/reviews", summary="리뷰 관리")
def get_reviews():
    return [
        {"review_id": 101, "user_id": 1, "program": "무빙", "content": "재미있어요!"},
        {"review_id": 102, "user_id": 2, "program": "피지컬 100", "content": "박진감 넘침"}
    ]
