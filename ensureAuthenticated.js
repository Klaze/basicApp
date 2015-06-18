module.exports = function ensureAuthenticated(req, res, next) {
	console.log(req.session.username);
	if (req.session.username) {
		next();
	} else {
		res.redirect('/');
	}
};