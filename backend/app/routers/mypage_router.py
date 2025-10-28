from fastapi import APIRouter

router = APIRouter()

@router.get("/subscriptions/{user_id}", summary="내 구독 관리 조회")
def get_subscriptions(user_id: int):
    return {
        "user_id": user_id,
        "subscriptions": [
            {"platform": "Netflix", "plan": "Standard", "cost": 13500},
            {"platform": "Disney+", "plan": "Basic", "cost": 9900}
        ]
    }

@router.get("/activities/{user_id}", summary="내 활동 조회")
def get_activities(user_id: int):
    return {
        "user_id": user_id,
        "activities": [
            {"program": "슬기로운 의사생활", "comment": "감동적이에요!"},
            {"program": "피지컬 100", "comment": "스릴 넘쳤음"}
        ]
    }

@router.get("/analysis/{user_id}", summary="OTT별 장르 관심도 분석")
def genre_analysis(user_id: int):
    return {
        "user_id": user_id,
        "analysis": {
            "드라마": 45,
            "예능": 30,
            "다큐멘터리": 15,
            "애니메이션": 10
        }
    }
