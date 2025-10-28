from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.db import SessionLocal, engine, Base
from app.models.review import Review
from app.schemas.review import ReviewCreate, ReviewResponse

Base.metadata.create_all(bind=engine)

router = APIRouter(prefix="/reviews", tags=["Reviews"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=ReviewResponse, status_code=201)
def create_review(review: ReviewCreate, db: Session = Depends(get_db)):
    new_review = Review(**review.dict())
    db.add(new_review)
    db.commit()
    db.refresh(new_review)
    return new_review

@router.get("/{user_id}", response_model=list[ReviewResponse])
def get_user_reviews(user_id: int, db: Session = Depends(get_db)):
    return db.query(Review).filter(Review.user_id == user_id).all()
