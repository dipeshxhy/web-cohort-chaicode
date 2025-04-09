// function to calculate all the numbers in array

function sumOfArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sumOfArray([1, 2, 3, 4, 5])); //15
console.log(sumOfArray([-1, 1])); //0
