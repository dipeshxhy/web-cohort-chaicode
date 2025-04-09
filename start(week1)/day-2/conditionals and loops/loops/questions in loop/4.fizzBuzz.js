/*Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
 */

function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
}
// console.log(fizzBuzz(15)); //FizzBuzz
// console.log(fizzBuzz(18)); //Fizz
// console.log(fizzBuzz(20)); //Buzz

function divideBy3(n) {
  if (n % 3 === 0) {
    return true;
  }
}
function divideBy5(n) {
  if (n % 5 === 0) {
    return true;
  }
}
function divideByBoth(n) {
  if (divideBy3(n) && divideBy5(n)) {
    return true;
  }
}

function displayFizzBuzz(n) {
  if (divideByBoth(n)) {
    return "FizzBuzz";
  } else if (divideBy3(n)) {
    return "Fizz";
  } else if (divideBy5(n)) {
    return "Buzz";
  } else {
    return "It's not divisible by 3 0r 5 or both";
  }
}
console.log(displayFizzBuzz(19)); // not
console.log(displayFizzBuzz(21)); // 'Fizz'
console.log(displayFizzBuzz(30)); // 'FizzBuzz'
console.log(displayFizzBuzz(15)); // 'FizzBuzz'
