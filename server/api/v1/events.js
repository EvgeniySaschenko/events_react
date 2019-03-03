let express = require('express');
let router = express.Router();
let baseUrl= 'https://kudago.com/public-api/v1.4/events'
let myLib= require('../../myLib');

router.get('/', function (req, res, next) {
	let{ location, page, is_free, id, page_size, type_query } = req.query;
	let curDateSec = new Date().getTime() / 1000;

	switch(type_query){
		case('events_city'):{
			let url= `${baseUrl}/?fields=id,title,slug,price,categories,images,is_free,short_title,dates,description,favorites_count,comments_count,age_restriction,place&page_size=12&location=${location}&expand=place,images&actual_since=${curDateSec}&page=${page}&is_free=${is_free}`;
			let= nameFile= `events_${location}_${page}_${is_free}`;
			myLib.tmpGetQuery(nameFile, url, res)
			break;
		}

		case('events_city_countRecords'):{
			let url= `${baseUrl}/?fields=id,title,slug,price,categories,images,is_free,short_title,dates,description,favorites_count,comments_count,age_restriction,place&page_size=${page_size}&location=${location}&expand=place,images&actual_since=${curDateSec}`;
			let= nameFile= `events_city_pageSize_${location}_${page_size}`;
			myLib.tmpGetQuery(nameFile, url, res)
			break;
		}

		case('event_id'):{
			let url= `${baseUrl}/${id}/?expand=place`;
			let nameFile= `event_${id}`;
			myLib.tmpGetQuery(nameFile, url, res);
			break;
		}
	}
	
});

module.exports = router;