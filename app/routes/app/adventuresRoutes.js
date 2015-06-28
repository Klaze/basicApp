exports.index = function index (req, res) {

	var user = {
		username: 'Apophis'
	};

	res.render('app/adventures/index', {bossify: bossify, title: 'Adventures - GrandUltima', user: user});
};

exports.create = function create (req, res) {
	res.render('app/adventures/create');
};

exports.update = function update (req, res) {
	res.render('app/adventures/update');
};