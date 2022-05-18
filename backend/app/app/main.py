from typing import AsyncGenerator, Optional

from fastapi import Depends, FastAPI, Form
from fastapi.requests import Request

from app.api.auth.auth import router as auth_router

app = FastAPI()
app.include_router(auth_router)


@app.get("/")
def index(request: Request):
    return {"SAY": "I BORN"}
