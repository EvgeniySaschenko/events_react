let express = require('express');
let router = express.Router();
let myLib= require('../../myLib');
let baseUrl= 'https://kudago.com/public-api/v1.4/locations'

router.get('/', function (req, res, next) {
	let url= `${baseUrl}`;
	let nameFile= 'locations';
	myLib.tmpGetQuery(nameFile, url, res);

});

module.exports = router;