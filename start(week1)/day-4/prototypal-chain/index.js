const obj1 = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  },
};
const obj2 = {
  name: "Jane",
  age: 25,
};
obj2.__proto__ = obj1; // setting the prototype of obj2 to obj1

function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function admin(name, age, admin) {
  User.call(this, name, age);
  this.admin = true;
}
admin.prototype = Object.create(User.prototype);
admin.prototype.constructor = admin; // setting the constructor of admin to admin

const user1 = new User("John", 30);
const user2 = new admin("Jane", 25, true);
