from fastapi import APIRouter

router = APIRouter()

@router.get("/platforms", summary="OTT 플랫폼 목록 조회")
def get_ott_platforms():
    return [
        {"name": "Netflix", "monthly_fee": 13500},
        {"name": "Disney+", "monthly_fee": 9900},
        {"name": "Wavve", "monthly_fee": 7900},
        {"name": "Tving", "monthly_fee": 8900},
    ]

@router.get("/programs", summary="프로그램 리스트 조회")
def get_programs():
    return [
        {"title": "슬기로운 의사생활", "genre": "드라마"},
        {"title": "무빙", "genre": "액션"},
        {"title": "피지컬: 100", "genre": "예능"},
    ]

@router.get("/recommend/{user_id}", summary="맞춤 추천 프로그램")
def get_recommendations(user_id: int):
    return {
        "user_id": user_id,
        "recommendations": [
            {"title": "유 퀴즈 온 더 블럭", "platform": "tvN"},
            {"title": "방과후 전쟁활동", "platform": "Tving"},
        ]
    }
