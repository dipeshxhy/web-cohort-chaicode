# Function in Javascript

function is like factory , machine which takes some type of data and process and build things and return back

to run function we have to call the function `functionName()`

## examples

```
function printSomething() {
  console.log("Hello World");
}
function greetUser() {
  console.log("Hello Dipesh!");
}
printSomething()
greetUser()

```

## To make function more dynamic we can pass arguments and receive in function

```
function takeUser(user) {
  console.log( `hello ${user}`);
}
takeUser("Dipesh");
takeUser("Hitesh Sir!");

```

### Return keyword

It helps to send back data or result and it stops the further execution of block of code after that return statement

**examples :**

```
function addNum(num1,num2){
    return num1 + num2
}
console.log(addNum(2,10)) //12

```
