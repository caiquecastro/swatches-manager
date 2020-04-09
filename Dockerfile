FROM node:12

WORKDIR /usr/src/app

COPY . /usr/src/app

CMD [ "node", "dist/main" ]