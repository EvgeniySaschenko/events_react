let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
	let data;
	switch(req.query.type){
		case('main'):{
			data = [
				{
					"id" : 1,
					"name" : "События",
					"status" : true,
					"link" : "/events"
				},
				{
					"id" : 2,
					"name" : "Бары",
					"status" : false,
					"link" : "/bars"
				}
			];
			break;
		}
		default:{
			data= []
		}
	}

	res.send(data);
});

module.exports = router;
