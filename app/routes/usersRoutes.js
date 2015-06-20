var User = App.model('user');

function newUser (req, res) {
	res.render('users/new', {title: 'Join the Adventure'});
}

function create (req, res) {
	console.log(req.body.password);
	var u = new User({email: req.body.email, passwordHash: req.body.password});
	u.save(function(err) {
		if (err) {
			res.status(422).send('Problem: ' + err.message);
		} else {
			res.status(200).send('welcome to the game');
		}
	});
}

exports.new = newUser;
exports.create = create;