
// This route is supposed to only show the current user
function showSelf (req, res) {
	res.render('app/profiles/show');
}

//this route shows some degree of what is available publicly for each profile
function show(req, res) {
	res.render('app/profiles/show');
}

exports.showSelf = showSelf;
exports.show = show;