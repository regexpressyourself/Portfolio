# Sam Messina's Portfolio

_*New and improved!*_

My new portfolio is a general-purpose node server. Static assets can be rendered off of dynamic routes, making it perfect for hosting different apps and projects I'm working on.

[See it live here!](https://www.smessina.com/)

## Table of Contents

1. [Getting Started](#getting-started)
3. [Deployment](#deployment)
2. [Built With](#built-with)
3. [Contributing](#contributing)
3. [Authors](#authors)
3. [License](#license)


## Introduction

I got tired of using default Nginx routing on my Digital Ocean server, so I set up a custom Node+Express solution. My solution allows for routes to be explicitly declared, along with dynamic static asset routing along with it. This is perfect for a dev/test environment, and equally ideal for serving smaller projects without a dedicated domain name.

## Getting Started

The server itself is fairly straight forward Node and Express stuff, detailed below.

### Prerequisites


Make sure you have NodeJS and NPM installed. [You can download Node here](https://nodejs.org/en/download/). This will install NPM as well.

You are welcome to use [Yarn](https://yarnpkg.com/en/) instead of NPM if you prefer.

### Installing

First, clone the project to a local directory.

```
   git clone https://github.com/regexpressyourself/portfolio.git && cd portfolio
```

Next, install the dependencies using NPM or Yarn.

#### Using NPM

```
   npm install
```

#### Using Yarn

```
   yarn install
```

**[Back to top](#table-of-contents)**

## Deployment

### Development Environment

While the portfolio homepage will build fine, the subpages will not. They serve files from git submodules


#### Using NPM

```
   npm run start
```

#### Using Yarn

```
   yarn run start
```

   That's it! Your development server is running at [http://localhost:8080](http://localhost:8080)
   
   Webpack is configured with hot reloading, so any changes saved to source files will be immediately reflected in the browser.

### Production Build

To build a production version of the app, with all React code loaded into a bundled, minified Javascript file, you need to run the `production` script declared in package.json.

#### Using NPM

```
   npm run production
```

#### Using Yarn

```
   yarn run production
```

   This will leave you with an `index.html` and an `index_bundle.js` file in the project root. Hosting these files from the same location will serve the production build of my portfolio.

**[Back to top](#table-of-contents)**


## Built With

* [React](https://facebook.github.io/react/) - The web framework that powers the site
* [Webpack](https://webpack.github.io/) - A module builder automate development and production build processes
* [Babel](https://babeljs.io/) - Transpiler to convert raw React code into browser-ready HTML and Javascript

**[Back to top](#table-of-contents)**

## Contributing

I'm always happy to receive pull requests, questions/issues regarding code, and feature requests on all my projects. Please feel free to open an issue or submit a pull request.

**[Back to top](#table-of-contents)**

## Authors

* **[Sam Messina](https://www.github.com/regexpressyourself)** - *Sole Developer* 

**[Back to top](#table-of-contents)**

## License

My portfolio is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


**[Back to top](#table-of-contents)**


