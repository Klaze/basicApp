exports.home = function home (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send('<html><head><title>extraUltima - Online</title></head><body><h1>Welcome to the game.</h1><p><img src="images/sword_and_shield.png"><a href="/adventures">Click me to begin!</a></p></body></html>');
};