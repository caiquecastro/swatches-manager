# Rauxa Services Engineering Code Challenge

## Description

A Swatch Manager where the user can view all swatches from the database, view
details of a single swatch and create new swatches.

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

## Testing the backend app

Using docker (Recommended way):

```
# E2E Tests
$ docker-compose run app yarn test

# E2E Tests
$ docker-compose run app yarn test:e2e
```

Running locally:

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

The NestJS framework was chosen due its scalabity where the developer can build
from a very simple application until a enterprise level application. It
encourages the developer to build with design patterns, modules that improves
code maintainability.

The Vue.js is a framework that allows to build SPA applications with components,
allowing code reusability.

## Todo

* Implement CD for backend
* Check if frontend is fully responsive
* More testing (Unit tests, improve coverage)

## Author

Caique de Castro

* [Website](https://caiquecastro.com/)
* [Github](https://github.com/caiquecastro)
* [Gitlab](https://gitlab.com/caiquecastro)

### Author Projects

[Hotel Manager](https://github.com/caiquecastro/hotel-manager):
App to manage hotels, B&B (bed and breakfast)

[Research Catalog](https://github.com/caiquecastro/research-catalog):
App to manage catalog researches. For Universities, Innovation Centres

### Author Contributions on Public Repositories / Libraries

* https://github.com/song940/node-escpos
* https://github.com/laravel
* https://github.com/Vincit/objection.js
* https://github.com/vuex-orm/plugin-axios
* https://github.com/knex/knex
* https://github.com/mongoosejs/mongoose-ttl
* https://github.com/adonisjs
* https://github.com/apollographql
* https://github.com/agenda/agenda
* https://github.com/twbs/bootstrap
* https://github.com/sequelize/sequelize
* https://github.com/jgthms/bulma
