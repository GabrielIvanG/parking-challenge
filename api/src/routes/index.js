const {Router} = require('express');
const router = Router();
const parkings = require('./parkings.js');
const geolocation = require('./geoLocation.js')

router.use('/parkings', parkings);
router.use('/geolocation', geolocation)

module.exports = router;
