/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(7);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _settings = __webpack_require__(2);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initialize the database.
 */
_mongoose2.default.connect(_settings2.default.MONGO_URI);

/**
 * Initialize the application.
 */
/* eslint-disable no-console, newline-after-var */
var app = module.exports = (0, _express2.default)();

/**
 * Support json & urlencoded requests.
 */
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

/**
 * Serve files in the /public directory as static files.
 */
app.use(_express2.default.static('public'));

__webpack_require__(3);

/**
 * Byh default, serve our index.html file
 */
app.get('*', function (req, res) {
  return res.sendFile(_settings2.default.APP_ROOT + '/public/index.html');
});

/**
 * Run the server
 */
app.listen(_settings2.default.APP_PORT, function () {
  return console.log('App listening on port ' + _settings2.default.APP_PORT + '!');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
__webpack_require__(8).config();

module.exports = {
    APP_ROOT: __dirname,
    APP_PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/app'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(0);

var _app2 = _interopRequireDefault(_app);

var _user = __webpack_require__(5);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable prefer-arrow-callback, no-magic-numbers */


/**
* Return a single user.
*/
_app2.default.get('/api/users/:userId', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userId, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = req.params.userId;
            _context.prev = 1;
            _context.next = 4;
            return _user2.default.findById(userId);

          case 4:
            user = _context.sent;


            res.status(200).send(user);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            res.status(500).send(_context.t0.message);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/**
* Return a list of users.
*/
_app2.default.get('/api/users', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user2.default.find();

          case 3:
            users = _context2.sent;


            res.status(200).send(users);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            res.status(500).send(_context2.t0.message);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/**
 * Add a user
 */
_app2.default.post('/api/users', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var username;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            username = req.body.username;
            _context3.prev = 1;
            _context3.next = 4;
            return _user2.default.create({ username: username });

          case 4:

            res.sendStatus(200);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);

            res.status(500).send(_context3.t0.message);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({

  /**
  * username.
  */
  username: {
    type: String,
    unique: true
  }
});

exports.default = _mongoose2.default.model('User', UserSchema);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjNmNWU3N2E3MmJiMmYxODk4OTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vLi9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwaS91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJzZXR0aW5ncyIsIk1PTkdPX1VSSSIsImFwcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImV4cHJlc3MiLCJzdGF0aWMiLCJyZXF1aXJlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiLCJBUFBfUk9PVCIsImxpc3RlbiIsIkFQUF9QT1JUIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIl9fZGlybmFtZSIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwidXNlcklkIiwicGFyYW1zIiwiVXNlciIsImZpbmRCeUlkIiwidXNlciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZmluZCIsInVzZXJzIiwicG9zdCIsInVzZXJuYW1lIiwiYm9keSIsImNyZWF0ZSIsInNlbmRTdGF0dXMiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsIm1vZGVsIl0sIm1h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QUFxQkcsS0FBckI7QUFKa0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBTWxCckIsZ0JBQUlpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsYUFBSUMsT0FBekI7O0FBTmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBOzs7QUFHQWhDLGNBQUltQyxJQUFKLENBQVMsWUFBVDtBQUFBLHNFQUF1QixrQkFBZ0J2QixHQUFoQixFQUFxQkMsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2J1QixvQkFEYSxHQUNBeEIsSUFBSXlCLElBREosQ0FDYkQsUUFEYTtBQUFBO0FBQUE7QUFBQSxtQkFJYlQsZUFBS1csTUFBTCxDQUFZLEVBQUVGLGtCQUFGLEVBQVosQ0FKYTs7QUFBQTs7QUFNbkJ2QixnQkFBSTBCLFVBQUosQ0FBZSxHQUFmO0FBTm1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVFuQjFCLGdCQUFJaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLGFBQUlDLE9BQXpCOztBQVJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7Ozs7QUNuQ0EsdUI7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsSUFBTVEsYUFBYSxJQUFJQyxnQkFBSixDQUFXOztBQUU1Qjs7O0FBR0FMLFlBQVU7QUFDUk0sVUFBTUMsTUFERTtBQUVSQyxZQUFRO0FBRkE7QUFMa0IsQ0FBWCxDQUFuQjs7a0JBV2VoRCxtQkFBU2lELEtBQVQsQ0FBZSxNQUFmLEVBQXVCTCxVQUF2QixDOzs7Ozs7QUNiZiwyQzs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxvQyIsImZpbGUiOiIuL3NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjNmNWU3N2E3MmJiMmYxODk4OTIiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCBuZXdsaW5lLWFmdGVyLXZhciAqL1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnc2V0dGluZ3MnO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlLlxuICovXG5tb25nb29zZS5jb25uZWN0KHNldHRpbmdzLk1PTkdPX1VSSSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmNvbnN0IGFwcCA9IG1vZHVsZS5leHBvcnRzID0gZXhwcmVzcygpO1xuXG4vKipcbiAqIFN1cHBvcnQganNvbiAmIHVybGVuY29kZWQgcmVxdWVzdHMuXG4gKi9cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG4vKipcbiAqIFNlcnZlIGZpbGVzIGluIHRoZSAvcHVibGljIGRpcmVjdG9yeSBhcyBzdGF0aWMgZmlsZXMuXG4gKi9cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcblxucmVxdWlyZSgnYXBpL3VzZXJzJyk7XG5cbi8qKlxuICogQnloIGRlZmF1bHQsIHNlcnZlIG91ciBpbmRleC5odG1sIGZpbGVcbiAqL1xuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4gcmVzLnNlbmRGaWxlKGAke3NldHRpbmdzLkFQUF9ST09UfS9wdWJsaWMvaW5kZXguaHRtbGApKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNlcnZlclxuICovXG5hcHAubGlzdGVuKHNldHRpbmdzLkFQUF9QT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgQXBwIGxpc3RlbmluZyBvbiBwb3J0ICR7c2V0dGluZ3MuQVBQX1BPUlR9IWApKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb25nb29zZVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlICovXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQVBQX1JPT1Q6IF9fZGlybmFtZSxcbiAgICBBUFBfUE9SVDogcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLFxuICAgIE1PTkdPX1VSSTogcHJvY2Vzcy5lbnYuTU9OR09fVVJJIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2FwcCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXR0aW5ncy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1hcnJvdy1jYWxsYmFjaywgbm8tbWFnaWMtbnVtYmVycyAqL1xuaW1wb3J0IGFwcCBmcm9tICdhcHAnO1xuaW1wb3J0IFVzZXIgZnJvbSAnbW9kZWxzL3VzZXInO1xuXG4vKipcbiogUmV0dXJuIGEgc2luZ2xlIHVzZXIuXG4qL1xuYXBwLmdldCgnL2FwaS91c2Vycy86dXNlcklkJywgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSByZXEucGFyYW1zO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQodXNlcklkKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIubWVzc2FnZSk7XG4gIH1cbn0pO1xuXG4vKipcbiogUmV0dXJuIGEgbGlzdCBvZiB1c2Vycy5cbiovXG5hcHAuZ2V0KCcvYXBpL3VzZXJzJywgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyLm1lc3NhZ2UpO1xuICB9XG59KTtcblxuLyoqXG4gKiBBZGQgYSB1c2VyXG4gKi9cbmFwcC5wb3N0KCcvYXBpL3VzZXJzJywgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgVXNlci5jcmVhdGUoeyB1c2VybmFtZSB9KTtcblxuICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVyci5tZXNzYWdlKTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2FwaS91c2Vycy5qcyIsImltcG9ydCAnLi9hcHAuanMnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcblxuICAvKipcbiAgKiB1c2VybmFtZS5cbiAgKi9cbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdW5pcXVlOiB0cnVlXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9tb2RlbHMvdXNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZG90ZW52XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9