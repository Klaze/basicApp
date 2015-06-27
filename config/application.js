var env = process.env.NODE_ENV || 'development',
	packageJson = require('../package.json'),
	path = require('path'),
	express = require('express');

console.log("Loading App in " + env + " mode.");

global.App = {
	app: express(),
	port: process.env.PORT || 3000,
	version: packageJson.version,
	root: path.join(__dirname, '..'),
	appPath: function(path) {
		return this.root + '/' + path;
	},
	require: function (path) {
		return require(this.appPath(path));
	},
	env: env,
	start: function() {
		if (!this.started) {
			this.started = true;
			this.app.listen(this.port);
			console.log("Running App Version: " + App.version + " on port: " + App.port + " in: " + App.env + " mode");
		}
	},
	model: function(path) {
		return this.require('./app/models/' + path);
	},
	route : function(path) {
		return this.require('./app/routes/' + path);
	},
	middleware: function(path) {
		return this.require('app/middlewares/' + path);
	},
	util: function(path) {
		return this.require('app/utils/' + path);
	},
	command: function(path) {
		return this.require('app/commands/' + path);
	}
};

//Setting Jade as Render Engine and views
App.app.set('views', App.appPath('app/views'));
App.app.set('view engine', 'jade');
App.app.set('view options', {pretty: env === 'development'});
App.app.locals({bossify:App.util('bossify')});

//Configure less
var lessMiddleware = require('less-middleware'),
	lessMiddlewareOptions = {
		dest: App.appPath('/public'),
		relativeUrls: true,
		force: App.env === 'development',
		once: App.env !== 'development',
		debug: App.env === 'development',
		preprocess: {
			path: function(pathname, req) {
				return pathname.replace('/stylesheets', '');
			}
		}
	},
	lessParserOptions = {
		dumpLineNumbers: 'mediaquery'
	},
	lessCompilerOptions = {
		compress: App.env !== 'development'
	};

App.app.use(lessMiddleware(
	App.appPath('app/stylesheets'),
	lessMiddlewareOptions,
	lessParserOptions,
	lessCompilerOptions
));


//Middleware
App.app.use(express.bodyParser());
App.app.use(express.methodOverride());
App.app.use(express.cookieParser());
App.app.use(express.cookieSession({secret: "Its a secret", key: "session"}));
App.require('config/initializers/passport.js')();
App.app.use(require('connect-flash')());
App.app.use(App.middleware('setFlash'));
App.app.use(App.middleware('attachAuthenticationStatus'));
App.app.use(App.app.router);
App.app.use(express.static(App.appPath('public')));

App.require('./config/routes')(App.app);

//DB Bootstrapping
App.require('config/database')(process.env.DATABASE_URL || 'mongodb://localhost/nodeslash_' + App.env);
