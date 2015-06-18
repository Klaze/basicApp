var express = require("express"),
	app = express(),
	port = process.env['PORT'] || 3000;

//Route Handlers
function home (req, res) {
	console.log("Im not home");
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>extraUltima - Online</title></head><body><h1>Welcome to the game.</h1><p><form action="/login" method="POST"><input type="text" name="username"><button type="submit">Start!</button></form></p><p><img src="images/sword_and_shield.png"><a href="/adventures">Click me to begin!</a></p></body></html>');
}

function adventuresIndex (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Will Ultima Descend?</title></head><body><h1>Are you Ready, ' + req.session.username + '?</h1><form action="/adventures" method="POST"><button type="submit">Yes, my liege</button></form></body></html>');
}

function createAdventure (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima Descends</title></head><body><h1>This may work after all</h1><form action="/adventures/42" method="POST"><input type="hidden" name="_method" value="put"><button type="submit">Cheat</button></form><form action="/adventures" method="POST"><button type="submit">Try Again</button></form><p> You have found some <a href="/loot/1">Loot!</a></p></body></html>');
}

function updateAdventure (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima - Stub</title></head><body><h1>Stub</h1></body></html>');
}

function showLoot (req, res) {
	var id = req.params.id;
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima Descends</title></head><body><h1>ID: ' + id + ': Ogre Slayer</h1><p> +9 against Ogres</p></body></html>');
}

function login(req, res) {
	if(req.body.username) {
		req.session.username = req.body.username;
		res.redirect("/adventures");
	} else {
		res.redirect("/");
	}
}

function notFound(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.send(404, "<p>Not Found</p>");
}

function catchErrors (err, req, res, next) {
	console.log("There was an error");
	next(err);
}

function showErrorPage (err, req, res, next) {
	res.setHeader('Content-Type', 'text/html');
	res.send(500, "Error man, error");
}

//Middlewares
function stoopidLogger(options) {
	return function stoopidLoggerInner(req, res, next) {
		console.log("Hi! I was called at: ", req.path);
		next();
	};
}

function ensureAuthenticated(req, res, next) {
	console.log(req.session.username);
	if (req.session.username) {
		next();
	} else {
		res.redirect('/');
	}
}

function readFromDB( req, res, next) {
	next(new Error("No!!!!!!"));
}

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.cookieSession({secret: "Its a secret", key: "session"}));
app.use("/", stoopidLogger());
app.use(app.router);
app.use(express.static(__dirname + '/public/'));
app.use(notFound);
app.use(catchErrors);
app.use(showErrorPage);

//Routes
app.get('/', home);
app.get('/read_from_db', readFromDB);
app.post('/login', login);
app.get('/*', ensureAuthenticated);
app.get('/adventures', ensureAuthenticated, adventuresIndex);
app.post('/adventures', createAdventure);
app.put('/adventures/:id', updateAdventure);
app.get('/loot/:id', showLoot);

app.listen(port);

console.log('Server running on port: ' + port);
