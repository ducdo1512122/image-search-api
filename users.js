var express = require('express');
var router = express.Router();
var imgSearch = require("google-images");
var apiKey = 'AIzaSyCj6zGCOthX__AzcGDENssx-5-I5W3XR8c';
var cseId = '009398540246307978289:iqst39d97we';
var client = new imgSearch(cseId,apiKey);
var link = require('../model/api_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/imagesearch/:query', function(req, res, next){
	var page = req.query.offset ? req.query.offset : 1;
	var imgName = req.params.name;
	var date =new Date().toISOString();

	client.search(imgName, {
		page: page
	}).then(function(images){
		if(images.length > 0){
			link.insert([{term: imgName, when: date}], function(){
				db.close();
				res.json(images);
			})
		}
	});
});

router.get('/api/latest/imgsearch', function(req, res, next){
	link.find({}, {_id: 0}.sort({_id:-1}).limit(10).toArray(function(err, docs){
		if(err){
              res.end('wtf');
          } else {
              res.json(docs);
              
          }
	}));
});

module.exports = router;
