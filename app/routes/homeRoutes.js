exports.home = function home (req, res) {
	if (req.user) {
		console.log('Hello: ', req.user.email);
	} else {
		console.log('Cannot find anyone with that information, sorry lass');
	}
	res.render('home/home');
};