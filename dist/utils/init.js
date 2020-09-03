"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _base = _interopRequireDefault(require("../routes/base"));

var _init = _interopRequireDefault(require("../routes/init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = (0, _express.default)();
api.use(_express.default.json());
api.use(_express.default.urlencoded({
  extended: false
}));
api.use(_express.default.static(_path.default.join(__dirname, 'public')));
api.use('/', _base.default);
api.use('/api/v1', _init.default);
module.exports = api;