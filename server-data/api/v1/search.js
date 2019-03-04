let express = require('express');
let router = express.Router();
let baseUrl= 'https://kudago.com/public-api/v1.4/search'
let myLib= require('../../myLib');

router.get('/', function (req, res, next) {
	let{ text, page_size, location } = req.query;

	let url= `${baseUrl}/?q=${text}&page_size=${page_size}&location=${location}&ctype=event`;
	let nameFile= `search_${text}_${location}_${page_size}`;

	myLib.tmpGetQuery(nameFile, url, res);
	
});

module.exports = router;