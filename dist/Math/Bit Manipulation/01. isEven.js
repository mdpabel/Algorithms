"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isEven;

function isEven(n) {
  return (n & 1) === 0;
} // console.log(isEven(10));
// It is based on the fact that even numbers have their last right bit to be set to 0.