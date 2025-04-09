// a function that finds all prime numbers up to a given number using loops and returns them in an array.

// [1,2,3,5,7,11,13,17]
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  const sqrtNum = Math.sqrt(n);
  for (let i = 5; i <= sqrtNum; i++) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(n) {
  let prime = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

console.log(printPrimes(20)); // Should return [2, 3, 5, 7, 11, 13, 17, 19]
