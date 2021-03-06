/**
 * 
 */

"use strict";
const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      path = require('path'),
      portNumber = process.env.PORT || process.argv[2] || 8080;

app.use(express.static(__dirname + '/dist')); 
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(portNumber, function () {
  console.log("Listening on port " + portNumber);
});