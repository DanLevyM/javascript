const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((currentVal, nextVal) => currentVal + nextVal);
console.log(sum);
// 10

const filter = numbers.filter(val => val >= 3);
console.log(filter);
// [3, 4]

const map = numbers.map(val => val * 2);
console.log(map);
// [2, 4, 6, 8]
