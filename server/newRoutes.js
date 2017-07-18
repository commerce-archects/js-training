var express = require('express');
var router = express.Router();

// example GET endpoint fetchign JSON
router.get("/json/", function(req, res, next){
	res.status(200).json({
		"boolean": true,
		"array": ["one", "two", "three", "four", "five"],
		'string': "This is a string",
		"json": {
			"nested": "This is a nested json property"
		}
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