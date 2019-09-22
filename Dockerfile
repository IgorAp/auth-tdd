FROM node:alpine

WORKDIR /

COPY . .

RUN 'npm install'

EXPOSE 3000