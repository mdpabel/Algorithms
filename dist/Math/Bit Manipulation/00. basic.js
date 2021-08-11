"use strict";

var num1 = 5; // 101

var num2 = 7; // 111

console.log("Bitwise AND operator ", num1 & num2);
console.log("Bitwise OR operator ", num1 | num2);
console.log("Bitwise XOR operator ", num1 ^ num2); //

console.log("Bitwise ONE's complement ", ~num1); // -n -1

console.log("Bitwise TWO's complement ", ~num1 + 1); // -n

console.log("Bitwise RIGHT shift ", num1 >> 1); // n / 2

console.log("Bitwise LEFT shift ", num1 << 1); // n * 2