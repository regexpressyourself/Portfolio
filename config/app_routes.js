const path = require('path');
const express = require('express');
const request = require("request");

module.exports = (app) => {

  app.get('/', (req, res) => {
    app.use('/', express.static('public'));
    app.use('/images', express.static('public/images'));
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

};

