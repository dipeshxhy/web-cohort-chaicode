function stringManupulator(str, changeString) {
  return changeString(str);
}

function changeStringIntoUppercase(str) {
  return str.toUpperCase();
}
function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
//counting number of vowels in string

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}

console.log(stringManupulator("apple", changeStringIntoUppercase));
console.log(stringManupulator("apple", reverseString));
console.log(stringManupulator("apple", countVowels));

console.log(stringManupulator("myth", countVowels));
