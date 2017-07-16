var express = require('express');
var router = express.Router();

// example GET endpoint fetchign JSON
router.get("/example/json/", function(req, res, next){
	res.json({
		"boolean": true,
		"array": [1,2,3,4,5]
	});
});

// example GET endpoint using url variable
router.get('/example/:msg', function (req, res) {
  res.send('GET request from training server: ' + req.params.msg)
})

// example POST endpoint using response body 
router.post('/example/', function (req, res) {
  res.send('CA Training server received POST request: ' + req.body['msg'])
})

module.exports = router;