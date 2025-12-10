FROM golang:1.21.6 as base

FROM base as dev

ENV SERVICE_KEY $SERVICE_KEY

WORKDIR /application

COPY ./holdem/HoldemProcessor ./
