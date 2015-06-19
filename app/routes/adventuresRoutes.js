exports.index = function index (req, res) {

	var user = {
		username: 'Apophis'
	};

	res.render('adventures/index', {title: 'Adventures - GrandUltima', user: user});
};

exports.create = function create (req, res) {
	res.render('adventures/create');
};

exports.update = function update (req, res) {
	res.render('adventures/update');
};