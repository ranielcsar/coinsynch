FROM node:18-alpine
RUN npm -g install json-server

RUN mkdir -p /app

WORKDIR /app

EXPOSE 3001

CMD json-server --watch ./db.json --port 3001 --host 0.0.0.0