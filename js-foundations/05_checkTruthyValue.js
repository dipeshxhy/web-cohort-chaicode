function checkType(value) {
  return typeof value;
}
console.log(checkType([])); //object
console.log(checkType({})); //object
console.log(checkType(1)); //number
console.log(checkType("0")); //string
console.log(checkType(-0)); //number
console.log(checkType(1)); //number
console.log(checkType(null)); //object
console.log(checkType(undefined)); //undefined
console.log(checkType(NaN)); //number
console.log(checkType("")); //string
console.log(checkType("code")); //string
console.log(checkType(true)); //boolean

//check truthy and falsy
function checkTruthy(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checkTruthy(""); //falsy
checkTruthy("1"); //truthy
checkTruthy("lol"); //truthy
checkTruthy({}); //truthy
checkTruthy([]); //truthy
checkTruthy(-1); //truthy
checkTruthy(null); //falsy
checkTruthy(NaN); //falsy
checkTruthy(undefined); //falsy
checkTruthy(-0); //falsy
checkTruthy(0); //falsy
checkTruthy(1n); //truthy
checkTruthy(-1n); //truthy
