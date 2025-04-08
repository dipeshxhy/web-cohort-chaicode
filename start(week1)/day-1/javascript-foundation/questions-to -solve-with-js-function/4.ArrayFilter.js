function filterArray(array, testFunc) {
  return testFunc(array);
}

function getEvenNumber(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
function totalSumOfArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function sortArray(arr) {
  let n = arr.length;
  let sortedArray = [...arr];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        //swap
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
    }
  }
  return sortedArray;
}

//[2,5,10,0]
//result =[2,5,0]
/**
 * loop 2
 * 2 < 5
 * 5 <10
 * 10 <0
 *
 */

console.log(filterArray([2, 10, 7, 8, 5], getEvenNumber));
console.log(filterArray([2, 10, 7, 8, 5], totalSumOfArray));
console.log(filterArray([2, 10, 7, 8, 5], sortArray));
