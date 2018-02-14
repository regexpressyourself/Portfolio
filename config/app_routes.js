/*
 * This is really where the magic happens.
 * Static asset routes can be declared based on the url request. 
 * This way, we can point to build directories in sub-projects 
 * easily.
 */

const path = require('path');
const express = require('express');

// Primary app routes - all the pages to render directly
const routes = [
  {
    home: '../public/index.html',
    route: '/',
    statics: [
      { from: '/',
        to: 'public' },
      { from: '/images',
        to: 'public/images' }
    ]
  },
  {
    home: '../projects/Q-Programming-Language/index.html',
    route: '/Q-Programming-Language',
    statics: [
      { from: '/Q-Programming-Language', 
        to: 'projects/Q-Programming-Language' },
      { from: '/reveal.js', 
        to: 'projects/Q-Programming-Language/reveal.js' }
    ]
  },
  {
    home: '../projects/Nabbar-Nav/example_create-react-app/build/index.html',
    route: 'nabbar-demo',
    statics: [
      { from: '/static/', 
        to: 'projects/Nabbar-Nav/example_create-react-app/build/static' }
    ]
  },
  {
    home: '../projects/PracticeBuddy/build/index.html',
    route: '/practicebuddy',
    statics: [
      { from: '/practicebuddy', 
        to: 'projects/PracticeBuddy/build' },
      { from: '/static', 
        to: 'projects/PracticeBuddy/build/static' }
    ]
  },
  {
    home: '../projects/seo_pres/index.html',
    route: '/seo',
    statics: [
      { from: '/seo', 
        to: 'projects/seo_pres' },
      { from: '/lib', 
        to: 'projects/seo_pres/lib' },
      { from: '/plugin', 
        to: 'projects/seo_pres/plugin' },
      { from: '/css', 
        to: 'projects/seo_pres/css' },
      { from: '/js', 
        to: 'projects/seo_pres/js' }
    ]
  },
  {
    home: '../projects/Iframer/index.html',
    route: 'iframer',
    statics: [
      { from: '/iframer', 
        to: 'projects/Iframer' }
    ]
  },
  {
    home: '../projects/gitflow/index.html',
    route: '/gitflow',
    statics: [
      { from: '/', 
        to: 'projects/gitflow' },
      { from: '/gitflow', 
        to: 'projects/gitflow' },
      { from: '/images',
        to: 'public/images' }
    ]
  },
  {
    home: '../projects/Turbo-Pup-Site/index.html',
    route: '/Turbo-Pup-Site',
    statics: [
      { from: '/Turbo-Pup-Site', 
        to: 'projects/Turbo-Pup-Site' },
      { from: '/', 
        to: 'projects/Turbo-Pup-Site' }
    ]
  }
];

module.exports = (app) => {
  for (let route of routes) {
    app.get(route.route, (req, res) => {
      for (let dirs of route.statics) {
        app.use(dirs.from, express.static(dirs.to));
      }
      res.sendFile(path.join(__dirname, route.home));
    });

  }
};

