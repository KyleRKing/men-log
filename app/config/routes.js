var express = require( 'express' ),
	apiRouter = express.Router(),
	articlesController = require('../contollers/articles'),
	Article = require('../models/article');

apiRouter.route('/articles')
	.get()
	.post();