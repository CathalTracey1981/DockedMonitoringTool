var request = require('request');
var Docker = require('dockerode');
var mongojs = require('mongojs');
var db = mongojs('dockerdb', ['dockerdb']);
var docker = new Docker({host: 'http://192.168.99.100', port: 4243});
var url = "http://192.168.99.100:4243";
module.exports = function(app) {


	// ===================================== server routes ================================================

	// ============= Info =====================
	app.get('/info', function (req, res) {
		console.log('I received a GET request');
		request.get(url + '/info', function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// ============= Containers =====================

	// All Containers
	app.get('/containers/', function (req, res) {
		request.get(url + '/containers/json?all=1', function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// Running Containers
	app.get('/runningContainers/', function (req, res) {
		request.get(url + '/containers/json', function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// Container
	app.get('/containers/:id', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get(url + '/containers/' + id + '/json', function(err, response, body){
			if(id){
				try{
					if (err){
						console.log(err);
						return res.status(500).send();
					}
					var str = JSON.parse(body);
					if (!response){
						return res.status(500).send();
					}
					res.json(str);
				}
				catch (Exception){}
			}
		});
	});

	// Start Container
	app.post('/containers/:id/start', function (req, res) {
		console.log('I received a POST request');
		var id = req.params.id;
		request.post(url + '/containers/' + id + '/start', function(err, response, body){
			try {
				if (err){
					console.log(err);
					return res.status(500).send();
				}
				res.status(200).send();
				console.log("Container " + id + " was started");
			}catch (Exception){}
		});
	});

	// Stop Container
	app.post('/containers/:id/stop', function (req, res) {
		console.log('I received a POST request');
		var id = req.params.id;
		request.post(url + '/containers/' + id + '/stop', function(err, response, body){
			try{
				if (err){
					console.log(err);
					return res.status(500).send();
				}
				console.log("Container " + id + " was stopped");
				res.status(200).send();
			}catch (Exception){}
		});
	});

	// Rename a Container
	app.post('/containers/:id/rename', function (req, res) {
		console.log('I received a POST request');
		var name = req.body.text;
		var id = req.params.id;
		request.post(url + '/containers/' + id + '/rename?name=' + name, function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			console.log("Container " + id + " was renamed");
		});
		res.status(200).send();
	});

	// Delete Container
	app.delete('/containers/:id', function (req, res) {
		console.log('I received a DELETE request');
		var id = req.params.id;
		request.del(url + '/containers/' + id, function(err, response, body){
			try {
				if (err){
					console.log(err);
					return res.status(500).send();
				}
				if (!err){
					console.log(err);
					return res.status(200).send();
				}
				if (response.statusCode !== 200){
					console.log(err);
					return res.status(500).send();
				}

			}catch (Exception){}

		});

	});

	// Create a Container
	app.post('/create/' , function(req, res){
		console.log(req.body);
		docker.createContainer({Image: req.body.image, Cmd: req.body.command, name: req.body.name}, function (err, container) {
			if (err){
				console.log(err);
				return res.status(404).send();
			}
			container.start(function (err, data) {
			});
		});
		res.status(200).send();
	});

	// ============= Images =====================

	// All Images
	app.get('/images/', function (req, res) {
		console.log('I received a GET request');
		request.get(url + '/images/json?all=1', function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			var str = JSON.parse(body);
			res.jsonp(str);
		});
	});

	// Image
	app.get('/images/:id', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get(url + "/images/" + id + "/json", function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			var str = JSON.parse(body);
			res.json(str);
		});
	});

	// Delete Image
	app.delete('/images/:id', function (req, res) {
		console.log('I received a DELETE request');
		var id = req.params.id;
		request.del(url + '/images/' + id, function(err, response, body){
			try{
				if (err){
					console.log(err);
					return res.status(500).send();
				}
				else {
					console.log("Image " + id + " was deleted");
					res.json(body);
					res.status(200).send();
				}

			}catch (Exception){}

		});
	});

	// Pull Image
	app.post('/pull/' , function(req, res) {
		docker.pull(req.body.name, function (err) {
			try {
				if (err) {
					console.log(err);
					return res.status(500).send();
				}
				else {
					return res.status(200).send();
				}
			} catch (Exception) {
			}
		});
	});

	// Save Image
	app.post('/saveImage/' , function(req, res) {
		console.log('I received a POST request');
		var id = req.params.id;
		request.post(url + '/images/create?fromImage=' + id, function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			console.log("Image " + id + " saved");
		});
	});

	// Image History
	app.get('/images/:id/history', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get(url + "/images/" + id + "/history", function(err, response, body){
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			var str = JSON.parse(body);
			res.json(str);
		});
	});


	// ========================== Statistics =======================================

	app.get('/containers/:id/stats', function (req, res) {
		console.log('I received a GET request');
		var id = req.params.id;
		request.get(url + '/containers/' + id + '/stats?stream=false', function(err, response, body){
			try{
				if (id){
					if (err){
						console.log(err);
						return res.status(500).send();
					}
					var str = JSON.parse(body);
					res.jsonp(str);
					return res.status(200).send();
				}
			}catch (Exception){}
		});
	});

	// ========================= Database =====================================

	// Add new user to database
	app.post('/dockerdb', function(req, res){
		console.log(req.body);
		// Check if email is already used
		var email = req.body.email;
		db.dockerdb.findOne({email: email}, function (err, user) {
			if (err){
				console.log(err);
				return res.status(500).send();
			}
			if (user){
				console.log("Already used!");
				return res.status(500).send();

			}
			else{
				// If email not in use, add new user to database
				db.dockerdb.insert(req.body, function (err, doc) {
				});
				return res.status(200).send();
			}
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
				return res.status(404).send();
			}
			console.log(req.body);
			return res.status(200).send();
		});
	});

	// ================================ frontend routes =====================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};