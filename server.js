// ===================================================================== \\
// ============================== modules ============================== \\
// ===================================================================== \\

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// ============================== configuration ========================= \\

var app = express();
var port = process.env.PORT || 3000; // set port

// get all data of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public

// =============================== routes =============================== \\
require('./app/routes')(app); // pass our application into our routes

// =============================== start app ============================= \\
app.listen(3000);
console.log('Listening on port ' + port);
