"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isOdd;

function isOdd(n) {
  return (n & 1) === 1;
} // console.log(isOdd(12));
// It is based on the fact that odd numbers have their last right bit to be set to 1.