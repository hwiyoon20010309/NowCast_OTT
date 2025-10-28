from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# --- Request/Response Schemas ---
class SignupRequest(BaseModel):
    username: str
    email: str
    password: str
    login_type: str = "ID"  # 기본값: ID가입

class LoginRequest(BaseModel):
    email: str
    password: str

# --- Routes ---
@router.post("/signup", summary="회원가입")
def signup(user: SignupRequest):
    if user.email == "duplicate@example.com":
        raise HTTPException(status_code=409, detail="이미 가입된 이메일입니다.")
    return {"code": 201, "success": True, "message": "회원가입이 완료되었습니다."}

@router.post("/login", summary="로그인")
def login(credentials: LoginRequest):
    if credentials.password != "1234":
        raise HTTPException(status_code=401, detail="비밀번호가 올바르지 않습니다.")
    return {"code": 200, "success": True, "message": "로그인 성공"}
