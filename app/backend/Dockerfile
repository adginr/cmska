FROM python:3.10-slim as build-stage

WORKDIR /tmp

RUN pip install poetry

ADD pyproject.toml poetry*.lock /tmp/

RUN poetry export -f 'requirements.txt' -o 'requirements.txt' 


FROM python:3.10-slim

WORKDIR /etc/app

COPY --from=build-stage /tmp/requirements.txt /etc/app/

RUN pip install -r requirements.txt
