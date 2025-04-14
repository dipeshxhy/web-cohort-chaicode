function checkTrafficLight(light) {
  light = light.toLowerCase();
  let result;
  if (light === "red") {
    result = "Stop";
  } else if (light === "yellow") {
    result = "Slow Down!";
  } else if (light === "green") {
    result = "Go !";
  } else {
    return "Violates Signal !";
  }
  return result;
}

console.log(checkTrafficLight("Red"));
console.log(checkTrafficLight("yellow"));
console.log(checkTrafficLight("Green"));
console.log(checkTrafficLight("orange"));
