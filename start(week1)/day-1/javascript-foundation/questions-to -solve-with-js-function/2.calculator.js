function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return addition(num1, num2);
  } else if (operator === "-") {
    return subtraction(num1, num2);
  } else if (operator === "*") {
    return multiplication(num1, num2);
  } else if ((num1, num2)) {
    return division(num1, num2);
  } else {
    return `Invalid Operator ${operator}`;
  }
}

console.log(calculate(2, 3, "+")); //5
console.log(calculate(0, 3, "-")); //-3
console.log(calculate(12, 15, "*")); // 180
console.log(calculate(10, 5, "/")); //2
