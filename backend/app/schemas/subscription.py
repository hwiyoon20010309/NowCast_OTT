from pydantic import BaseModel
from datetime import datetime

class SubscriptionBase(BaseModel):
    platform: str
    plan: str | None = None
    monthly_fee: float
    status: str = "active"

class SubscriptionCreate(SubscriptionBase):
    user_id: int

class SubscriptionResponse(SubscriptionBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True
