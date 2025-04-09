const express = require('express');
const { addLabour } = require('../controllers/labour/labour');
const router = express.Router();

router.post('/addlabour', addLabour);

module.exports = router;