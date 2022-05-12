let cache = {
  "0": 0,
  "1": 1,
};

const fibo = (value) => {
  console.log('VALUE: ', value)
  console.log('CACHE: ', cache)
  if (value in cache) {
    return cache[value];
  }
  const result = fibo(value - 1) + fibo(value - 2);
  cache[value] = result;
  return result;
}
console.log(fibo(10));
