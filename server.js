var express = require("express"),
	app = express(),
	port = process.env['PORT'] || 3000;

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public/'));
console.log(__dirname + '/public');


function home (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>extraUltima - Online</title></head><body><h1>Welcome to this , er, game.</h1><p><img src="images/sword_and_shield.png"><a href="/adventures">Click me to begin!</a></p></body></html>');
}

function adventuresIndex (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Will Ultima Descend?</title></head><body><h1>Are you Ready?</h1><form action="/adventures" method="POST"><button type="submit">Yes, my liege</button></form></body></html>');
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

//Routes
app.get('/', home);
app.get('/adventures', adventuresIndex);
app.post('/adventures', createAdventure);
app.put('/adventures/:id', updateAdventure);
app.get('/loot/:id', showLoot);

app.listen(port);

console.log('Server running on port: ' + port);
