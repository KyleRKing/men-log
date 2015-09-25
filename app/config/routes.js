var express = require( 'express' ),
	apiRouter = express.Router(),
	articlesController = require('../controllers/articles.js'),
	Article = require('../models/article');

apiRouter.route('/articles')
	.post(articlesController.create)
	.get(articlesController.index)


module.exports = apiRouter;

