/*
 * This is really where the magic happens.
 * Static asset routes can be declared based on the url request. 
 * This way, we can point to build directories in sub-projects 
 * easily.
 */

const path = require('path');
const express = require('express');

// Primary app routes - all the pages to render directly
const home          = path.join(__dirname, '../public/index.html');
const q             = path.join(__dirname, '../projects/Q-Programming-Language/index.html');
const nabbar        = path.join(__dirname, '../projects/Nabbar-Nav/example_create-react-app/build/index.html');
const practicebuddy = path.join(__dirname, '../projects/PracticeBuddy/build/index.html');
const iframer       = path.join(__dirname, '../projects/Iframer/index.html');
const gitflow       = path.join(__dirname, '../projects/gitflow/index.html');
const tpup          = path.join(__dirname, '../projects/Turbo-Pup-Site/index.html');

module.exports = (app) => {

  // declare home route
  app.get('/', (req, res) => {

    // set up static asset routing
    app.use( '/', express.static('public'));
    app.use( '/images', express.static('public/images'));

    // send the index.html file declared above.
    res.sendFile(home);
  });

  // declare a route for Git Flow
  app.get('/gitflow', (req, res) => {

    // set up assets
    app.use( '/', express.static('projects/gitflow'));
    app.use( '/gitflow', express.static('projects/gitflow'));

    // send the index file
    res.sendFile(gitflow);
  });

  // do the same for the other projects...

  app.get('/practicebuddy', (req, res) => {
    app.use( '/practicebuddy', express.static('projects/PracticeBuddy/build'));
    app.use( '/static', express.static('projects/PracticeBuddy/build/static'));
    res.sendFile(practicebuddy);
  });
  app.get('/iframer', (req, res) => {
    app.use( '/iframer', express.static('projects/Iframer'));
    res.sendFile(iframer);
  });
  app.get('/nabbar-demo', (req, res) => {
    app.use( '/static/', express.static('projects/Nabbar-Nav/example_create-react-app/build/static'));
    res.sendFile(nabbar);
  });
  app.get('/Q-Programming-Language', (req, res) => {
    app.use( '/Q-Programming-Language', express.static('projects/Q-Programming-Language'));
    app.use( '/reveal.js', express.static('projects/Q-Programming-Language/reveal.js'));
    res.sendFile(q);
  });
  app.get('/Turbo-Pup-Site', (req, res) => {
    app.use( '/Turbo-Pup-Site', express.static('projects/Turbo-Pup-Site'));
    app.use( '/', express.static('projects/Turbo-Pup-Site'));
    res.sendFile(tpup);
  });
};
