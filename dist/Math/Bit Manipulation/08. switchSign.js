"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = switchSign;

function switchSign(n) {
  // 1s complement = ~n
  // 2s complement = 1s complement + 1
  return ~n + 1;
} // console.log(switchSign(11));