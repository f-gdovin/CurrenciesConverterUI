FROM node:10.11.0-alpine


WORKDIR /frontend

COPY . .

RUN npm install

EXPOSE 3000