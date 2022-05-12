const random = () => {
  return Promise.resolve(Math.random());
}

const test = async() => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`${first} ${second} ${third}`)
}

test();