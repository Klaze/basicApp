exports.show = function show (req, res) {
	var id = req.params.id;
	res.render('loot/show', {lootId: id});
};