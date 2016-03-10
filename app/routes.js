var request = require('request');
var Docker = require('dockerode');
var mongojs = require('mongojs');
var db = mongojs('dockerdb', ['dockerdb']);
var docker = new Docker({host: 'http://192.168.99.100', port: 4243});
module.exports = function(app) {

	// ===================================== server routes ================================================

	// ============= Info =====================
	app.get('/info', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/info', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// ============= Containers =====================

	// All Containers
	app.get('/containers/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/containers/json?all=1', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// Container
	app.get('/containers/:id', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get('http://192.168.99.100:4243/containers/' + id + '/json', function(err, response, body){
			var str = JSON.parse(body);
			res.json(str);
		});
	});

	// Start Container
	app.post('/containers/:id/start', function (req, res) {
		console.log('I received a POST request');
		var id = req.params.id;
		request.post('http://192.168.99.100:4243/containers/' + id + '/start', function(err, response, body){
			console.log("Container " + id + " was started");
		});
	});

	// Stop Container
	app.post('/containers/:id/stop', function (req, res) {
		console.log('I received a POST request');
		var id = req.params.id;
		request.post('http://192.168.99.100:4243/containers/' + id + '/stop', function(err, response, body){
			console.log("Container " + id + " was stopped");
		});
	});

	// Delete Container
	app.delete('/containers/:id', function (req, res) {
		console.log('I received a DELETE request');
		var id = req.params.id;
		request.del('http://192.168.99.100:4243/containers/' + id, function(err, response, body){
			console.log("Container " + id + " was deleted");
		});
	});

	// Create a Container
	app.post('/create/' , function(req, res){
		console.log(req.body);
		docker.createContainer({Image: req.body.image, Cmd: req.body.command, name: req.body.name}, function (err, container) {
			container.start(function (err, data) {
			});
		})
	});

	// ============= Images =====================
	// All Images
	app.get('/images/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/images/json?all=1', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// Image
	app.get('/images/:id', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get("http://192.168.99.100:4243/images/" + id + "/json", function(err, response, body){
			var str = JSON.parse(body);
			res.json(str);
		});
	});

	// Delete Image
	app.delete('/images/:id', function (req, res) {
		console.log('I received a DELETE request');
		var id = req.params.id;
		request.del('http://192.168.99.100:4243/images/' + id, function(err, response, body){
			console.log("Image " + id + " was deleted");
			res.json(body);
		});
	});

	// Pull Image
	app.post('/pull/' , function(req, res) {
		console.log(req.body);
		docker.pull(req.body.name, function (err, stream) {
		});
	});

	// Image History
	app.get('/images/:id/history', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get("http://192.168.99.100:4243/images/" + id + "/history", function(err, response, body){
			var str = JSON.parse(body);
			res.json(str);
		});
	});

	//============================ Mean Stack ======================================
	// Mongo Images
	app.get('/mongoImage/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/images/3c04b3c4ace81e51b0348afe83405ff24acdde2af417a1762390c8d479c99612/json', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// NodeJs Images
	app.get('/nodeImage/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/images/ca7fc1468b14a3a292735f0bda7343b35f141285809ca1e018f27250300d5aea/json', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	//============================ Java Stack ======================================
	// Java Images
	app.get('/javaImage/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/images/31e7de89e3f8e82de88c0844032b1c0f4083da0c0446ff9ce94c1f4ff31cd36f/json', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// Tomcat Images
	app.get('/tomcatImage/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/images/077f6fc7781f14598cb3b55a495d687b9ec5bfaa7024dc8eae255df457bb7bef/json', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// Jetty Images
	app.get('/jettyImage/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/images/3d7ef12acbeeeeffe52860a567d68f8f76684931c2d60279eeda67212fc5f6bb/json', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// MySql Images
	app.get('/mySqlImage/', function (req, res) {
		console.log('I received a GET request');
		request.get('http://192.168.99.100:4243/images/50806c71cd84eb5b3bc15060d3aa60c8963c7df6cc6ceff9a7cb5c27b62a01f4/json', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

    // ========================== Statistics =======================================

	app.get('/containers/:id/stats', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get('http://192.168.99.100:4243/containers/' + id + '/stats?stream=false', function(err, response, body){
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// ========================= Database =====================================

	// Add new user to database
	app.post('/dockerdb', function(req, res){
		console.log(req.body);
		db.dockerdb.insert(req.body, function (err, doc) {
			res.json(doc);
		});
	});

	// Authenticate user
	app.post('/login/', function(req, res){

		var email = req.body.email;
		var password = req.body.password;
		db.dockerdb.findOne({email: email, password:password}, function (err, user) {
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			if (!user){
				console.log("User Not Found!");
				req.flash('error', 'Could not update your name, please contact our support team');
				return res.status(404).send();
			}
			console.log(req.body);
			req.flash('success', 'Your name was updated');
			return res.status(200).send();
		});


	});
	// ================================ frontend routes =====================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};