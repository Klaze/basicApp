exports.showLoot = function showLoot (req, res) {
	var id = req.params.id;
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>Ultima Descends</title></head><body><h1>ID: ' + id + ': Ogre Slayer</h1><p> +9 against Ogres</p></body></html>');
};