exports.adventuresIndex = function adventuresIndex (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Will Ultima Descend?</title></head><body><h1>Are you Ready, ' + req.session.username + '?</h1><form action="/adventures" method="POST"><button type="submit">Yes, my liege</button></form></body></html>');
};

exports.createAdventure = function createAdventure (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima Descends</title></head><body><h1>This may work after all</h1><form action="/adventures/42" method="POST"><input type="hidden" name="_method" value="put"><button type="submit">Cheat</button></form><form action="/adventures" method="POST"><button type="submit">Try Again</button></form><p> You have found some <a href="/loot/1">Loot!</a></p></body></html>');
};

exports.updateAdventure = function updateAdventure (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima - Stub</title></head><body><h1>Stub</h1></body></html>');
};