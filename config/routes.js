module.exports = function(app) {
	//Handlers
	var homeRoutes = App.route('homeRoutes');
	app.get('/', homeRoutes.home);

	var adventuresRoutes = App.route('adventuresRoutes');
	app.get('/adventures', adventuresRoutes.index);
	app.post('/adventures', adventuresRoutes.create);
	app.put('/adventures/:id', adventuresRoutes.update);

	var bestiaryRoutes = App.route('bestiaryRoutes');
	app.get('/bestiary', bestiaryRoutes.index);

	var lootRoutes = App.route('lootRoutes');
	app.get('/loot', lootRoutes.index);
	app.get('/loot/:id', lootRoutes.show);
};