//Middlewares
function stoopidLogger(options) {
	return function stoopidLoggerInner(req, res, next) {
		console.log("Hi! I was called at: ", req.path);
		next();
	};
}



module.exports = function(app, express, handlers) {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(express.cookieSession({secret: "Its a secret", key: "session"}));
	app.use("/", stoopidLogger());
	app.use(app.router);
	app.use(express.static(__dirname + '/public/'));
	app.use(handlers.notFound);
	app.use(handlers.catchErrors);
	app.use(handlers.showErrorPage);
};