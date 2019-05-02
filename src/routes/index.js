const express = require('express');

const datos = require('../assets/data.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { datos });
});

module.exports = router;