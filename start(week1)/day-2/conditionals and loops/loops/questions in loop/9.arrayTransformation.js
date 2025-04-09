// a function that takes an array of strings and returns a new array where each string is transformed to uppercase.

function toUpperCase(strings) {
  let upper = [];

  for (let i = 0; i < strings.length; i++) {
    const result = strings[i].toUpperCase();
    upper.push(result);
  }
  return upper;
}

console.log(toUpperCase(["apple", "banana", "cherry"]));
// Should return ["APPLE", "BANANA", "CHERRY"]
