export default function detectOppositeSign(num1, num2) {
  return (num1 ^ num2) < 0;
}

// const res = detectOppositeSign(12, -1);
// console.log(res);
// const num = 5;
// const res = num.toString(2);
// console.log(~res);
