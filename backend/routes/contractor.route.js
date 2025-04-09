const express = require('express');
const { addContractor } = require('../controllers/contractor/contractor');
const router = express.Router();

router.post('/addcontractor',addContractor);

module.exports = router;