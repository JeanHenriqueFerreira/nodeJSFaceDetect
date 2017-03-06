// requires
var express  = require('express');                          
var morgan = require('morgan');             
var bodyParser = require('body-parser');    
var methodOverride = require('method-override');
var path = require('path');

// variables
var app = express();    

// routes

// body   
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride());

app.listen(2000, function () {
  console.log('Servidor iniciado na porta 2000');
});