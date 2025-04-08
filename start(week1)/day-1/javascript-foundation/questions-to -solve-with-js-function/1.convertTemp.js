function convertIntoCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}

function convertIntoFahrenheit(temperature) {
  return temperature * (9 / 5) + 32;
}
// console.log(convertIntoCelsius(98.6));
// console.log(convertIntoFahrenheit(37));

//now into one function calculate both celsius and fahrenheit

function convertTemperature(value, unit) {
  if (unit === "C") {
    return value * (9 / 5) + 32;
  }
  if (unit === "F") {
    return (value - 32) * (5 / 9);
  }
}

console.log(convertTemperature(32, "F")); // Output: 0
console.log(convertTemperature(0, "C")); // Output: 32
console.log(convertTemperature(212, "F")); // Output: 100
console.log(convertTemperature(100, "C")); // Output: 212
console.log(convertTemperature(77, "F")); // Output: 25
console.log(convertTemperature(25, "C")); // Output: 77
console.log(convertTemperature(-40, "F")); // Output: -40
console.log(convertTemperature(-40, "C")); // Output: -40
console.log(convertTemperature(68.9, "F")); // Output: 20.5
console.log(convertTemperature(20.5, "C")); // Output: 68.9
