var express = require( 'express' ); // returns a function
var app = express(); //call this function on next line => instanciates the app
var mongoose = require( 'mongoose' ); //did npm .... --save for the remaining three
var bodyParser = require( 'body-parser' );
var apiRouter = require( './app/config/routes');
var DB = 'mongodb://localhost:27017/men-blog'; //connects our local db on port 27017
var port = 3000;


//body-parser config:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect( DB );


//routes config // namespace
app.use('/api', apiRouter);


//server
app.listen(port);
console.log( 'magic is happening on port' + port);