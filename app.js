// requires
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var https = require("https");
var fs = require('fs');

// variables
var app = express();

// routes

// body   
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride());

app.listen(8080, function() {
  console.log('Servidor HTTP iniciado na porta 8080');
});

//http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer({
  //key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  //cert: fs.readFileSync('test/fixtures/keys/agent2-cert.cert')
}, app).listen(443, function() {
  console.log('Servidor HTTPS iniciado na porta 443');
});