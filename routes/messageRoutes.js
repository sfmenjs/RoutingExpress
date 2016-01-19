var express = require('express');
var router = express.Router();

var message = 'This is a message';

router.get('/message', function(req, res) {
	res.send(message);
});

router.post('/message', function(req, res) {
	message = req.body.message;
	res.send("Success");
});

router.get('/otherMessage', function(req, res) {
	res.send('Another Message!');
});

module.exports = router;