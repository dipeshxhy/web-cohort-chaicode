// find maximum numbers
//[20,3,29,100,78]

function findMaximum(numbers) {
  let maxNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
console.log(findMaximum([20, 3, 29, 100, 78])); // 100

console.log(findMaximum([3, 9, 1, 25, 7])); //25
