import multiplyByTwo from "./Multiply By Two";
import divideByTwo from "./divide by two";
import isEven from "./01. isEven";
import isPositive from "./isPositive";

export default function multiply(a, b) {
  if (b === 0 || a === 0) {
    return 0;
  }

  const multiplyByOddPositive = () =>
    multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  const multiplyByOddNegative = () =>
    multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
  const multiplyByOdd = () =>
    isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative();

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}

// console.log(multiply(2, 3));
