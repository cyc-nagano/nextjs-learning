FROM node:16-buster-slim

WORKDIR /app

COPY ./src/package.json ./
RUN npm install

