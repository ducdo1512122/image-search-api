var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;

var URImongo = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.MONGO_URI;

mongo.connect(URImongo, function(err, db) {
	if (err) console.log(err);

	console.log('Mongo connected on port 27017...');
	//app.listen(process.env.PORT || 8080);
});

app.get('/:url', function (req, res) {
    var query = req.params.query;
	var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDEykaCsoX1-pFpZiadJRhiJBnVPZoHi10&cx=015419526484037096294:77kiid7uhas&searchType=image&imgType=photo&q=';
    //https://github.com/estevanmaito/imagesearch-fcc
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
