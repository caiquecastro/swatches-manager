# Swatches Manager

## Description

A Swatch Manager where the user can view all swatches from the database, view
details of a single swatch and create new swatches.

## Installation

```bash
$ npm install
```

## Running the backend app

Using docker (Recommended way):

```
$ docker-compose up -d
```

Running locally:

```bash
$ cd backend
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing the app

Using docker (Recommended way):

```
# Unit Tests
$ docker-compose run app yarn test

# E2E Tests
$ docker-compose run app yarn test:e2e
```

Running backend locally (requires local postgres database server):

```bash
$ cd backend

$ yarn install

# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

Running frontend locally:

```bash
$ cd frontend

$ yarn install

# unit tests
$ yarn serve
```

## Tech Stack

* The code is hosted on Github using Github Actions as CI and CD.
* This application was prodly made with [NestJS](http://nestjs.com/).
* This application front-end was developed with VueJs [Vue.js](https://vuejs.org/).
* The frontend application was hosted on AWS S3.
* The backend application was hosted on AWS EC2.
* The database uses AWS RDS managed database.

The NestJS framework was chosen due its scalabity where the developer can build
from a very simple application until a enterprise level application. It
encourages the developer to build with design patterns, modules that improves
code maintainability.

The Vue.js is a framework that allows to build SPA applications with components,
allowing code reusability.

## Todo

* Add templates to create infrastructure on the cloud
* Improve security
* Enable multiple images for swatches
* Save image on S3
* Upload 2 versions of image (large/original and thumbnail)
* Improve UI and UX
* Implement CD for backend
* Check if frontend is fully responsive
* More tests (Unit tests, improve coverage)
* Optimize CI jobs
* Authentication and Authorization if required
