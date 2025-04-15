const person1 = {
  name: "Dipesh",
  greet() {
    console.log(`Hi , ${this.name}`);
  },
};
person1.greet();

const person2 = {
  name: "Ravi",
};
person1.greet.call(person2);

setTimeout(person1.greet.bind(person1), 2000);
