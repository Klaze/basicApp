function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		next();
	} else {
		req.flash('error', 'You must be signed in man.');
		res.redirect('/sign_in');
	}
}

module.exports = ensureAuthenticated;