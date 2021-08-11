"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSingle;

function getSingle(list) {
  var res = list[0];

  for (var i = 1; i < list.length; i++) {
    res = res ^ list[i];
  }

  return res;
}

var arr = [12, 1, 12, 3, 1, 2, 1, 3]; // console.log(getSingle(arr));