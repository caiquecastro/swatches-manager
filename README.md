# Rauxa Services Engineering Code Challenge

## Hosted Application

http://rauxa-swatches.s3-website-us-east-1.amazonaws.com/

## Installation

```bash
$ npm install
```

## Running the backend app

Using docker (Recommended way):

```
$ docker-compose up -d
```

```bash
$ cd backend
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing the backend app

```bash
$ cd backend

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Tech Stack

* The code is hosted on Github using Github Actions as CI and CD.
* This application was prodly made with [NestJS](http://nestjs.com/).
* This application front-end was developed with VueJs [Vue.js](https://vuejs.org/).
* The frontend application was hosted on AWS S3.
* The backend application was hosted on AWS EC2.
* The database uses AWS RDS managed database.
