# [Fasoc Dashboard using Nodejs]


## Installation

1. You need `Node.js` (at least 10.x version) installed on your machine, if you don't have it, you should install it - download [link](https://nodejs.org/en/download/)
2. `cd` to your downloaded  app
3. Install necessary dependencies:
    - **Via node `npm` package manager** - Run `npm install` on the project root

## Run the application

1. For starting the application, the following script (defined in `package.json` under `scripts`) must be called:
    - via **npm**: `npm run start` or `npm run dev` for starting the development environment, which has livereload enabled;


## Features

In order to see the available features `cd` into `features` folder, and you will then find a folder for each of the available features, mostly each folder containing:

- A `routes.js` file that usually contains the `GET` and `POST` requests

All feature routes are mounted in `routes/index.js` from the project root.

## For the Front-end side:

##### Templates

- You can find all the templates in `views` folder where you will find:
1. The `layout.ejs` file, the main template layout.
2. A `pages` folder with all the page templates
3. A `partials` folder with the common components (header, footer, sidebar)



## File Structure

```
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   └── index.js
├── db
│   ├── index.js
│   ├── knexfile.js
│   ├── migrations
│   │   └── 20190213122702_create-users-table.js
│   └── seeds
│       └── create-default-user.js
├── docker-compose.yml
├── docs
│   └── documentation.html
├── ecosystem.config.js
├── env-files
│   ├── development.env
│   └── production.env
├── features
│   ├── login
│   │   ├── commands
│   │   │   ├── load-page.js
│   │   │   ├── login.js
│   │   │   ├── redirect-to-dashboard.js
│   │   │   └── verify-request-body.js
│   │   ├── constants.js
│   │   ├── init-auth-middleware.js
│   │   ├── repository.js
│   │   └── routes.js
│   ├── logout
│   │   ├── commands
│   │   │   └── logout.js
│   │   └── routes.js
│   ├── profile
│   │   ├── commands
│   │   │   ├── load-page.js
│   │   │   ├── update-user-info.js
│   │   │   └── verify-request-body.js
│   │   ├── constants.js
│   │   ├── repository.js
│   │   └── routes.js
│   ├── register
│   │   ├── commands
│   │   │   ├── create-user.js
│   │   │   ├── load-page.js
│   │   │   └── verify-request-body.js
│   │   ├── constants.js
│   │   ├── repository.js
│   │   └── routes.js
│   └── reset-password
│       ├── commands
│       │   └── load-page.js
│       └── routes.js
├── gulpfile.js
├── haproxy.cfg
├── logger.js
├── package.json
├── public
│   ├── css
│   │   ├── argon.css
│   │   └── argon.min.css
│   ├── fonts
│   │   └── nucleo
│   ├── img
│   │   ├── brand
│   │   ├── icons
│   │   └── theme
│   ├── js
│   │   ├── argon.js
│   │   └── argon.min.js
│   ├── scss
│   │   ├── argon.scss
│   │   ├── bootstrap
│   │   ├── core
│   │   └── custom
│   └── vendor
├── routes
│   └── index.js
├── screens
│   ├── Dashboard.png
│   ├── Login.png
│   ├── Profile.png
│   └── Users.png
├── views
│   ├── layout.ejs
│   ├── pages
│   │   ├── 404.ejs
│   │   ├── dashboard.ejs
│   │   ├── icons.ejs
│   │   ├── login.ejs
│   │   ├── maps.ejs
│   │   ├── profile.ejs
│   │   ├── register.ejs
│   │   ├── reset-password.ejs
│   │   └── tables.ejs
│   └── partials
│       ├── auth
│       │   ├── footer.ejs
│       │   ├── header.ejs
│       │   └── navbar.ejs
│       ├── dropdown.ejs
│       ├── footer.ejs
│       ├── header.ejs
│       ├── navbar.ejs
│       └── sidebar.ejs
└
```
