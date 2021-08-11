"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUniqueElement;

function getUniqueElement(arr) {
  var ones = 0;
  var twos = 0;
  var common_bit_masks;

  for (var i = 0; i < arr.length; i++) {
    twos = twos | ones & arr[i];
    ones = ones ^ arr[i];
    common_bit_masks = ~(ones & twos);
    ones = ones & common_bit_masks;
    twos = twos & common_bit_masks;
  }

  return ones;
}

var arr = [3, 3, 2, 3, 4, 4, 4, 4, 4]; // console.log(getUniqueElement(arr));
// https://www.careercup.com/question?id=7902674