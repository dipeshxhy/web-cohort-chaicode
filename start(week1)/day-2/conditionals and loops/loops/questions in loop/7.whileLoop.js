// a function that uses a while loop to find how many times a number can be divided by 2 before it becomes less than 1.

function countDivisibleTimes(n) {
  let count = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      count++;
    }
    n--;
  }
  return count;
}

console.log(countDivisibleTimes(100));
