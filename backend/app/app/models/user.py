from app.models.base import Base
from fastapi_users.db import SQLAlchemyBaseUserTable
from sqlalchemy import Column, Integer


class User(SQLAlchemyBaseUserTable[int], Base):
    id = Column(Integer, primary_key=True)
