var express = require('express');
var router = express.Router();
var axios = require('axios');

// example GET endpoint fetchign JSON
router.get("/json/", function(req, res, next) {
	res.status(200).json({
		"array":[1,2,3,4,5,6,7,8,9,10]
	});
});

// example GET endpoint using url variable
router.get('/:msg', function (req, res) {
  	res.status(200).send('GET request from training server: ' + req.params.msg)
})

// example POST endpoint using response body 
router.post('/', function (req, res) {
   res.status(200).send('CA Training server received POST request: ' + req.body['msg'])
})

module.exports = router;