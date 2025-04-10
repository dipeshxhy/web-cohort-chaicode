console.log("prototypes in javascript");
const myString = "Hello, World";
// console.log(myString.length);
// console.log(myString.__proto__ === String.prototype);

const number = new Number(2);
const string = new String(2);
const bool = new Boolean(2);
const obj = new Object({
  id: 1,
});
const arr = new Array(1, 2);
console.log(number, string, bool, obj, arr);
