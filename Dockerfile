FROM node:12

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfiles

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000

CMD [ "node", "dist/main" ]
