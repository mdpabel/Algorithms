export default function getUniqueElement(arr) {
  let ones = 0;
  let twos = 0;
  let common_bit_masks;

  for (let i = 0; i < arr.length; i++) {
    twos = twos | (ones & arr[i]);
    ones = ones ^ arr[i];

    common_bit_masks = ~(ones & twos);

    ones = ones & common_bit_masks;
    twos = twos & common_bit_masks;
  }
  return ones;
}

let arr = [3, 3, 2, 3, 4, 4, 4, 4, 4];

// console.log(getUniqueElement(arr));

// https://www.careercup.com/question?id=7902674
