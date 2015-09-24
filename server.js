var express = require.( 'express' );
var app = express();
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );
var apiRouter = require( './app/config/routes');
var DB = 'mongodb://localhost:27017/men-blog'; //connects our local db on port 27017
port = 3000;




//body-parser config:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect( DB );


//routes config // namespace
app.use('/api', apiRouter);


//server
app.listen(port);
console.log( 'magic is happening on port' + port)