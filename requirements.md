# Requirements

## Project Overview
In this challenge, we are going to prototype a basic `3 tier web application` that will allow us to manage [`Swatches`](/swatches/readme.md) data easily from a browser. To understand what a swatch is, you can [read more here.](/swatches/readme.md)

The **Swatches Manager** will provide a simple interface to view our swatches, view the details for an individual swatch, and create new swatches that will be stored in our swatches database.

## General Features

There are 3 general features the **Swatches Manager** needs to support:
- **List of Swatches** - A view that list of all of our swatches in our database. For the list view, display the `image thumbnail`, the `swatch name`, and the `active` status. They can be presented in either a list or table format. 
- **Swatch Details** - The swatch details view displays the large image of the swatch along with `active` status, `name`, `price`, `color` and `date`. Essentially everything plus the `-lg` image. 
- **Add a Swatch** - A form that when filled out and submitted, creates a new swatch. Newly created swatches should become available in list/detail views. The data model for a swatch can be [found here](/swatches/readme.md). 

## Use Cases

Users should be able to perform the below actions in the respective views/screens:
- In the `List View`, the ability to view a list of swatches and see the information specified above. 
- In the `List View`, the ability to `click` on a `swatch thumbnail` or `swatch name` and view the details for that swatch. 
- From the `List View` the user can click a button labeled `New Swatch` to add a new swatch.
- In the `Add Swatch` view, the ability to create a [`new swatch`](/swatches/readme.md) and see it in the other views respectively.


# Technical Spec

## Back End 
### NodeJS application requirements: 
- Develop a basic set of `CRUD` services that are exposed via an `HTTP` endpoint. 
  - Ability to `CREATE` a new a swatch
  - Ability to `READ`  swatches
  - Ability to `UPDATE`  swatches
  - Ability to `DELETE` a swatch
- The app should respond to incoming `API requests` with a `JSON` response. 
- The app should have support for `GET`, `POST`, and `PUT` methods.
- The app should query the database and return in support of incoming requests. 
- The app should update the database in support of incoming requests.


### Hosting
Your NodeJS application should be deployed to an `EC2 instance`.  

> Please remember to provision all resources using [`AWS FREE TIER`](https://aws.amazon.com/free/). If you do, you should not incur any charges for this exercise. 

## Front End
### VueJS Application Requirements:
- The front end should be built using [VueJS](https://vuejs.org/). 
- Your app should leverage endpoints exposed by your NodeJS application to perform CRUD operations. 
- Your code should be easy to understand, and broken into logical components.
- Your final Vue build should a single page app with a single `index.html`
linking to external `JS/CSS/etc`. 

### Hosting
- When Hosting your front end application, ensure it is authorized to make requests to your Node app. Consider CORS rules if necessary.
- Hosting your front end you have many options. Choose one from the list below:  
  - [Render](https://render.com/)
  - [AWS S3](https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy)    
  - [Netlify](https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps)
  - [Heroku](https://devcenter.heroku.com/articles/heroku-cli)
  - [Surge](http://surge.sh/)


# Bonus Functionality For the Swatches Manager
The below features can be added to get bonus points for added functionality: 
- Add the ability for a swatch to have `multiple images`. Each swatch can view multiple images.
- Add the ability for swatches to be turned on and off i.e. `Active/inactive`.