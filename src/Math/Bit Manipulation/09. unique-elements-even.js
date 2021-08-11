export default function getSingle(list) {
  let res = list[0];
  for (let i = 1; i < list.length; i++) {
    res = res ^ list[i];
  }
  return res;
}
const arr = [12, 1, 12, 3, 1, 2, 1, 3];

// console.log(getSingle(arr));
