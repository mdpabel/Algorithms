"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = multiply;

var _MultiplyByTwo = _interopRequireDefault(require("./Multiply By Two"));

var _divideByTwo = _interopRequireDefault(require("./divide by two"));

var _isEven = _interopRequireDefault(require("./isEven"));

var _isPositive = _interopRequireDefault(require("./isPositive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function multiply(a, b) {
  if (b === 0 || a === 0) {
    return 0;
  }

  var multiplyByOddPositive = function multiplyByOddPositive() {
    return multiply((0, _MultiplyByTwo["default"])(a), (0, _divideByTwo["default"])(b - 1)) + a;
  };

  var multiplyByOddNegative = function multiplyByOddNegative() {
    return multiply((0, _MultiplyByTwo["default"])(a), (0, _divideByTwo["default"])(b + 1)) - a;
  };

  var multiplyByEven = function multiplyByEven() {
    return multiply((0, _MultiplyByTwo["default"])(a), (0, _divideByTwo["default"])(b));
  };

  var multiplyByOdd = function multiplyByOdd() {
    return (0, _isPositive["default"])(b) ? multiplyByOddPositive() : multiplyByOddNegative();
  };

  return (0, _isEven["default"])(b) ? multiplyByEven() : multiplyByOdd();
} // console.log(multiply(2, 3));