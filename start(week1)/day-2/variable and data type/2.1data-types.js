const myName = "Dipesh Chaudhary";
const age = 23;
const isStudent = true;
const programmingLanguages = ["JavaScript", "Python", "C"];

function typeCheckOfVariable(variable) {
  return `type of ${variable} :${typeof variable}`;
}
console.log(typeCheckOfVariable(myName)); //string
console.log(typeCheckOfVariable(age)); //number
console.log(typeCheckOfVariable(programmingLanguages)); //object
console.log(typeCheckOfVariable(function () {})); //function
console.log(typeCheckOfVariable(null)); //object
console.log(typeCheckOfVariable(undefined)); //undefined
console.log(typeCheckOfVariable({})); //object
console.log(typeCheckOfVariable(-1)); //number
console.log(typeCheckOfVariable(false)); //boolean
console.log(typeCheckOfVariable(["apple"])); //object
console.log(typeCheckOfVariable(0)); //number
console.log(typeCheckOfVariable(-0)); //number
console.log(typeCheckOfVariable(BigInt(10))); //bigint
