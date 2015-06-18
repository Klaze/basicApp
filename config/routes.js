module.exports = function(app, handlers) {
	var ensureAuthenticated = require('./ensureAuthenticated');
	//Routes
	app.get('/', handlers.home);
	app.post('/login', handlers.login);
	app.get('/adventures', handlers.adventuresIndex);
	app.post('/adventures', handlers.createAdventure);
	app.put('/adventures/:id', handlers.updateAdventure);
	app.get('/loot/:id', handlers.showLoot);
};