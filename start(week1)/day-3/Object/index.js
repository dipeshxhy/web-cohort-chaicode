const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",

  // Method inside an object
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  // ES6 shorthand method
  greet() {
    return `Hello, my name is ${this.firstName}!`;
  },
};

// Basic object operations
console.log("Accessing properties:");
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// Adding new properties
person.occupation = "Developer";
person["isEmployed"] = true;

// Modifying properties
person.age = 31;

// Deleting properties
delete person.email;

// Object.keys(), Object.values(), Object.entries()
console.log("\nObject methods:");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Nested objects
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
  },
  employees: ["John", "Jane", "Bob"],
};

console.log("\nNested objects:");
console.log(company.address.city);
console.log(company.employees[1]);

// Object destructuring
console.log("\nDestructuring:");
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

// Object spread operator
const personCopy = { ...person };
const enhancedPerson = { ...person, hobby: "Reading", age: 32 };
console.log("\nSpread operator:", enhancedPerson);

// Object.assign()
const target = { id: 1 };
const source = { name: "Target Object" };
const merged = Object.assign(target, source, { active: true });
console.log("\nObject.assign():", merged);

// Object methods: Object.freeze() and Object.seal()
const frozen = Object.freeze({ value: "Can't change me" });
// frozen.value = "Try to change"; // This will fail silently in non-strict mode
console.log("\nFrozen object:", frozen);

const sealed = Object.seal({ value: "Can be modified but not extended" });
sealed.value = "Modified value";
// sealed.newProp = "New property"; // This will fail silently in non-strict mode
console.log("Sealed object:", sealed);

// Object getters and setters
const product = {
  name: "Laptop",
  _price: 1000,
  _discount: 0.1,

  get price() {
    return this._price * (1 - this._discount);
  },

  set price(value) {
    this._price = value;
  },

  get discount() {
    return this._discount * 100 + "%";
  },

  set discount(value) {
    this._discount = value / 100;
  },
};

console.log("\nGetters and setters:");
console.log("Discounted price:", product.price);
product.price = 1200;
product.discount = 15;
console.log("Updated price:", product.price);

// Object.defineProperty()
const user = {};
Object.defineProperty(user, "id", {
  value: 12345,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log("\nObject.defineProperty():", user.id);

// Prototype and inheritance
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add method to Employee
Employee.prototype.work = function () {
  return `${this.name} is working as a ${this.jobTitle}`;
};

const employee = new Employee("Alice", 28, "Engineer");
console.log("\nPrototype inheritance:");
console.log(employee.greet());
console.log(employee.work());

// Modern class syntax (ES6+)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  static isAnimal(obj) {
    return obj instanceof Animal;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog("Rex", "German Shepherd");
console.log("\nClasses:");
console.log(dog.speak());
console.log(Animal.isAnimal(dog));

// Object property descriptors
const descriptor = Object.getOwnPropertyDescriptor(product, "price");
console.log("\nProperty descriptor:", descriptor);
