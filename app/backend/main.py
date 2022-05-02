from fastapi import FastAPI, Form
from fastapi.requests import Request

app = FastAPI()


@app.get("/")
def index(request: Request):
    return {"SAY":"I BORN"}
