const express = require('express');

const datos = require('../assets/data.json');

const router = express.Router();

router.get('/character', (req, res) => {
  res.render('character', { datos });
});

module.exports = router;