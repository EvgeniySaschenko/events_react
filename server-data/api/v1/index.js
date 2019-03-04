let express = require('express');
let router = express.Router();

let apiNav= require('./nav.js')
let apiEvents= require('./events.js')
let apiLocations= require('./locations.js')
let apiSearch= require('./search.js')
/**
 * nav
 */
router.use('/nav', apiNav);
/**
 * listEvents
 */
router.use('/events', apiEvents);
/**
 * locations
 */
router.use('/locations', apiLocations);
/**
 * search
 */
router.use('/search', apiSearch);

module.exports = router;
