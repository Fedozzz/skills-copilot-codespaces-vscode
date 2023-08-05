// Create web server
// Create a web server with Node.js, using the http module
// Path: server.js
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
});
server.listen(8080);
console.log("Server running on port 8080");
// Create a web server with Node.js, using the Express module
// Path: server.js
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("Hello World!");
});
app.listen(8080, function () {
    console.log("Server running on port 8080");
});
// Create a web server with Node.js, using the Express module and the EJS template engine
// Path: server.js
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index');
});
app.listen(8080, function () {
    console.log("Server running on port 8080");
});
// Create a web server with Node.js, using the Express module and the Pug template engine
// Path: server.js
var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index');
});
app.listen(8080, function () {
    console.log("Server running on port 8080");
});
// Create a web server with Node.js, using the Express module and the Handlebars template engine
// Path: server.js
var express = require('express');
var app = express();
app.set('view engine', 'hbs');
app.get('/', function (req, res) {
    res.render('index');
});
app.listen(8080, function () {
    console.log("Server running on port 8080");
});
// Create a web server with Node.js, using the Express module and the Jade template engine
// Path: server.js
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    res.render('index');
});
app.listen(8080, function () {
    console.log("Server running on port 8080");
});

