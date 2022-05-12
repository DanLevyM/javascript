function favoriteColor(color = "blue") {
  return color;
}

console.log(favoriteColor("red"));

//==============================
function myFct() {
  console.log(arguments);
  console.log(arguments[0]);
}
myFct(1, 2);

//==============================
function myRegularFunction() {
  const myArrowFunction = () => {
    console.log(arguments);
  }
  myArrowFunction('c', 'd');
}
myRegularFunction('a', 'b');

