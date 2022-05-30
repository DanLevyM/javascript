const numbers = [12, 2, 31, 4, 30, 25, 33, 100, 1];
const sum = numbers.reduce((currentVal, nextVal) => currentVal + nextVal);
console.log(sum);
// 10

const filter = numbers.filter(val => val >= 3);
console.log(filter);
// [3, 4]

const map = numbers.map(val => val * 2);
console.log(map);
// [2, 4, 6, 8]

const sort = numbers.sort((a, b) => a - b);
console.log(sort);

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];
const itemSort = items.sort(function (a, b) {
  return a.value - b.value;
});
console.log(itemSort);


