var express = require("express"),
	app = express(),
	port = process.env['PORT'] || 3000;

function home (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima</title></head><body><h1>This is something special</h1><a href="/adventures">Go to this thing!</a></body></html>');
}

function adventuresIndex (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Will Ultima Descend?</title></head><body><h1>Welcome ....to HELL!!!</h1><form action="/adventures" method="POST"><button type="submit">Yeah Boii!</button></form></body></html>');
}

function createAdventure (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima Descends</title></head><body><h1>Welcome ....to HELL!!!</h1><form action="/adventures" method="POST"><button type="submit">Do it again Do it Again!</button></form></body></html>');
}

//Routes
app.get('/', home(req, res));
app.get('/adventures', adventuresIndex(req, res));
app.post('/adventures', createAdventure(req, res));

app.listen(port);

console.log('Server running on port: ' + port);
