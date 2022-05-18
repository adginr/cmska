FROM python:3.10-slim as build-stage

WORKDIR /tmp

RUN pip install poetry

ADD ./app/pyproject.toml ./app/poetry.lock* /tmp/

RUN poetry export -f 'requirements.txt' -o 'requirements.txt' 


FROM python:3.10-slim

WORKDIR /app

COPY  --from=build-stage ./tmp/requirements.txt /app/

RUN pip install alembic

RUN pip install --no-cache-dir -r /app/requirements.txt

ENV PYTHONPATH=/app