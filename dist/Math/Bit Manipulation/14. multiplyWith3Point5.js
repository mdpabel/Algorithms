"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = multiplyWith3Point5;

function multiplyWith3Point5(n) {
  return (n >> 1) + n + (n << 1);
}

var res = multiplyWith3Point5(2);
console.log(res);