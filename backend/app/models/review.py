from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float
from datetime import datetime
from app.core.db import Base

class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    program_title = Column(String, nullable=False)
    platform = Column(String, nullable=False)
    rating = Column(Float)
    comment = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
