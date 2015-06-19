function index(req, res) {
	var beasts = [
	{id: 1, name: 'Ogre', strength: 6, hp: 10, gold: 25},
	{id: 2, name: 'Cat', strength: 2, hp: 50, gold: 15},
	{id: 3, name: 'Dog', strength: 12, hp: 15, gold: 100}];
	
	res.render('bestiary/index', {beasts: beasts});
}

exports.index = index;