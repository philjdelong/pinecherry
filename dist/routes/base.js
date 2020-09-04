"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', (req, res) => {
  res.json({
    status: "OK",
    code: 200
  });
  console.log("ET Node Home.");
});
module.exports = router;