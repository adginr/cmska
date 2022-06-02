from typing import AsyncGenerator, Optional

from fastapi import Depends, FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.requests import Request

from app.api.auth.auth import router as auth_router

app = FastAPI()
app.include_router(auth_router)


origins = ["http://localhost", "http://localhost:3000", "http://127.0.0.1:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index(request: Request):
    return {"SAY": "I BORN"}
