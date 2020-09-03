"use strict";

var express = require('express');

var router = express.Router();
router.post('/init', (req, res) => {
  res.json({
    status: 'OK',
    code: 200
  });
  console.log("We're init..");
});
module.exports = router;