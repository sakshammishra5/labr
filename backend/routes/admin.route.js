const express = require('express');
const { addAdmin } = require('../controllers/admin/admin');
const router = express.Router();

router.post('/addadmin', addAdmin);

module.exports = router;

