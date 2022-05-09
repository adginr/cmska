import os

from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env


POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DB = os.getenv("POSTGRES_DB")
SECRET = os.getenv("SECRET")

DATABASE_URL = f"postgresql+asyncpg://postgres:{POSTGRES_PASSWORD}@db/{POSTGRES_DB}"
