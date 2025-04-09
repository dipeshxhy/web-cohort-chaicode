//Given an object, write a function that uses a for...in loop to print all key-value pairs in the format "key: value".

function printKeyValuesPairs(obj) {
  for (let key in obj) {
    console.log(`${key}:${obj[key]}`);
  }
}

printKeyValuesPairs({ name: "John", age: 30, city: "New York" });
// Should print:
// name: John
// age: 30
// city: New York
