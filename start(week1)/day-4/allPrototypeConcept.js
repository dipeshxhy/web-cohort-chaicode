const num1 = 1;

/**
 * num1.__proto__
Number {0, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, toString: ƒ, …}
num1.__proto__.__proto__
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
num1.__proto__.__proto__
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
num1.__proto__.__proto__.__proto__
null
 */

// num1.__proto__ // Number.prototype
// num1.__proto__.__proto__ // Object.prototype
// num1.__proto__.__proto__.__proto__ // null

// Number.prototype.__proto__===Object.prototype // true

// let's create function

// sayHello.prototype // {constructor: ƒ, __proto__: Object}
// sayHello.__proto__// Function.prototype [[native code]]: ƒ () { [native code] }

//so we can add functionality of function in prototype

// function sayHello() {}

// sayHello.directGreet = function () {
//   console.log("Hello, direct from function");
// };

// sayHello.prototype.greet = function () {
//   console.log(`Hello, from prototype`);
// };

// const greeting = new sayHello();
// greeting.greet(); // Hello, from prototype

// sayHello.directGreet(); // Hello, direct from function

const user1 = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  },
};
const user2 = {
  name: "Jane",
  age: 25,
};

// console.log("user1", user1);
// console.log("user2", user2);

// there is repetation of code in both objects they have same properties and methods and this violates DRY principle and also take more memory
// so we can use prototype to solve this problem
user2.__proto__ = user1;

// console.log(user2.greet());

// think when we have to make same model of object with same properties and methods we used constructor function

function User(name, age) {
  this.name = name;
  this.age = age;

  //   this.greet = function () {
  //     console.log(
  //       `Hello, my name is ${this.name} and I am ${this.age} years old`
  //     );
  //   };
}

User.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};
const user3 = new User("John", 30);
const user4 = new User("Jane", 25);
// console.log(user3.greet());
// console.log(user4.greet());

// console.log(user3);
// console.log(user4);

//syntactical sugar for prototype

class Vehicle {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  start() {
    return `Starting ${this.name} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(name, model, wheel, color) {
    super(name, model); // calling parent constructor
    this.color = color;
    this.wheel = wheel;
  }
  start() {
    const vehicleStart = super.start();
    return `${vehicleStart} with ${this.wheel} wheels and color ${this.color}`;
  }
}

const vehicle1 = new Vehicle("Toyota", "Corolla");
const vehicle2 = new Vehicle("Honda", "Civic");

const car1 = new Car("BMW", "X5", 4, "Black");
const car2 = new Car("Audi", "A6", 4, "White");

console.log("vehicle1", vehicle1.start());
console.log("vehicle2", vehicle2.start());
console.log("car1", car1.start());
console.log("car2", car2.start());

function SayHello() {}
SayHello.prototype.greet = function () {
  console.log("Hello from prototype");
};
SayHello.directGreet = function () {
  console.log("Hello from direct function");
};
const hello = new SayHello();
hello.directGreet = function () {
  console.log("Hello from direct function");
};
hello.greet(); // Hello from prototype
SayHello.directGreet(); // Hello from direct function

console.log(hello.directGreet()); // undefined

// This is difference beween
// Function objects and prototype objects

/**
 * the instance created using new SayHello when we try to access directGreet which is in function objects then it gives undefined because the flows goes like this
 * first it search in
 */
