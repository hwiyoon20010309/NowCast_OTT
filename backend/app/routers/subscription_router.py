from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.db import SessionLocal, engine, Base
from app.models.subscription import Subscription
from app.schemas.subscription import SubscriptionCreate, SubscriptionResponse

Base.metadata.create_all(bind=engine)

router = APIRouter(prefix="/subscriptions", tags=["Subscriptions"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=SubscriptionResponse, status_code=201)
def create_subscription(sub: SubscriptionCreate, db: Session = Depends(get_db)):
    new_sub = Subscription(**sub.dict())
    db.add(new_sub)
    db.commit()
    db.refresh(new_sub)
    return new_sub

@router.get("/{user_id}", response_model=list[SubscriptionResponse])
def get_user_subscriptions(user_id: int, db: Session = Depends(get_db)):
    return db.query(Subscription).filter(Subscription.user_id == user_id).all()
