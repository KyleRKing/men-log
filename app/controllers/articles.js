//controller

var Article = require('../models/article');

function create(req, res) {
	//Instantiate a new article using our awesome Schema:
	var article = new Article(req.body);
	console.log(req.body); //this console.log is optional

	//save the Article
	article.save(function(err) {
		if (err) {
			//res.send(err)
			console.log('not able to create article b/c ' + err);
		} else {
			res.json({message: 'Article successfully created'});
		}
	});
}

function index(req, res) {
	Article.find(function(err, articles){
		if (err) {
			console.log('Could not get articles because: ', err)
		} else {
			res.json(articles)
		}
	})

}


module.exports = {
  create: create,
  index: index
};