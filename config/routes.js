var passport = require('passport');


module.exports = function(app, auth) {
	//Handlers
	var homeRoutes = App.route('homeRoutes');
	app.get('/', homeRoutes.home);
	app.get('/about', homeRoutes.about);

	var bestiaryRoutes = App.route('bestiaryRoutes');
	app.get('/bestiary', bestiaryRoutes.index);

	var lootRoutes = App.route('lootRoutes');
	app.get('/loot', lootRoutes.index);
	app.get('/loot/:id', lootRoutes.show);

	var usersRoutes = App.route('usersRoutes');
	app.get('/sign_up', usersRoutes.new);
	app.post('/sign_up', usersRoutes.create);

	var sessionRoutes = App.route('sessionRoutes');
	app.get('/sign_in', sessionRoutes.new);
	app.post('/sign_in', passport.authenticate('local', {successRedirect: '/app', failureRedirect: '/sign_in', failureFlash: 'That is not correct'}));
	app.get('/sign_out', sessionRoutes.destroy);

	app.all('/app/*', App.middleware('ensureAuthenticated'));

	var adventuresRoutes = App.route('app/adventuresRoutes');
	app.get('/app/adventures', adventuresRoutes.index);
	app.post('/app/adventures', adventuresRoutes.create);
	app.put('/app/adventures/:id', adventuresRoutes.update);

	var dashboardRoutes = App.route('app/dashboardRoutes');
	app.get('/app', dashboardRoutes.index);

	var profileRoutes = App.route('app/profileRoutes');
	app.get('/app/profile', profileRoutes.showSelf);
	app.get('/app/profile/edit', profileRoutes.edit);
	app.get('/app/profiles/:id', profileRoutes.show);

	var billingRoutes = App.route('app/billingRoutes');
	app.get('/app/billing', billingRoutes.show);
	app.get('/app/billing/edit', billingRoutes.edit);
	app.get('/app/billing/update', billingRoutes.update);

	var characterRoutes = App.route('app/charactersRoutes');
	app.get('/app/characters', characterRoutes.index);
	app.get('/app/characters/new', characterRoutes.new);
	app.post('/app/characters', characterRoutes.create);
	app.get('/app/characters/:id', characterRoutes.show);
	var canModifyCharacter = auth.can('modify character');
	app.get('/app/characters/:id/edit', canModifyCharacter, characterRoutes.edit);
	app.put('/app/characters/:id',canModifyCharacter, characterRoutes.update);
	
};