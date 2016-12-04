var applicationRoot = __dirname;
var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var favicon = require('serve-favicon');

app.set('view engine', 'ejs');
app.use(express.static(applicationRoot + '/public'));

app.use(favicon(applicationRoot + '/favicon.ico'));

app.get('/', function(req, res) {

  res.render('pages/index', {
    title: "Miss Ertel's Lovely Learning Tool"
  });
});

app.listen(port);