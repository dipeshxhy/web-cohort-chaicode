//filter even numbers

function getEvenNumbers(numbers) {
  let even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    }
  }
  return even;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Should return [2, 4, 6]
