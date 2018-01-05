var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();


app.use(express.static(__dirname + '/public/'));
app.set('view engine', 'ejs');
app.use(ejsLayouts);


app.get('/', function(req, res) {
  res.render('home.ejs');
});

app.get('/about', function(req, res) {
  res.render('about.ejs');
});

app.get('/portfolio', function(req, res) {
  res.render('portfolio.ejs');
});

app.get('/contact', function(req, res) {
  res.render('contact.ejs');
});

app.listen(3000); 