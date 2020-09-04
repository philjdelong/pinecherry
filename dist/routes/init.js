"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // Include functionality for User Login


router.post('/init', (req, res) => {
  res.json({
    status: 'OK',
    code: 200
  });
  console.log("We're init..");
});
module.exports = router;