//print something
function printSomething() {
  console.log("Hello World");
}
function greetUser() {
  console.log("Hello Dipesh!");
}

printSomething();
greetUser();

//let's return from function
function takeUser(user) {
  return `hello ${user}`;
}
console.log(takeUser("Dipesh"));
console.log(takeUser("Hitesh Sir!"));

