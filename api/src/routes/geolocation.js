const {Router} = require('express');
const router = Router();
const {getCoords} = require('../controllers/parkings.js');

router.get('/', getCoords);

module.exports = router;