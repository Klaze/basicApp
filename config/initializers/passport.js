//Initilizer for Passport.js
function init () {
	var passport = require('passport'),
		localStrategy = require('passport-local').Strategy,
		usernameAndPasswordStrategy = new localStrategy(
			{ usernameField: 'email', passwordField: 'password'},
			App.model('user').findByEmailAndPassword
		),
		serializeUser = App.command('serializeUser')(),
		deserializeUser = App.command('deserializeUser')();

	passport.use(usernameAndPasswordStrategy);
	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);

	App.app.use(passport.initialize());
	App.app.use(passport.session());
}

module.exports = init;