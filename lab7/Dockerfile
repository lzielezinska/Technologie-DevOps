FROM node:7

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV REDIS_HOST=redis \
    REDIS_PORT=6379 \
    PGUSER=postgres \
    PGHOST=postgres-server \
    PGDATABASE=postgres \
    PGDPASSWORD=123abc123 \
    PGPORT=5432

CMD node index.js
