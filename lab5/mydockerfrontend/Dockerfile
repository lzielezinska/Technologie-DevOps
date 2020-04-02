FROM mhart/alpine-node:11

WORKDIR /opt/app

COPY package.json .

RUN yarn install

COPY . .

CMD ["yarn", "start"]