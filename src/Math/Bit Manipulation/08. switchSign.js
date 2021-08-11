export default function switchSign(n) {
  // 1s complement = ~n
  // 2s complement = 1s complement + 1
  return ~n + 1;
}

// console.log(switchSign(11));
