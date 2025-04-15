//enable negative index in array

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }

      return target[prop];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[prop] = value;
      }
      return true;
    },
  });
}

const arr = [1, 2, 3, 99, 20];
// const proxyArray = negativeIndex(arr);
// console.log(proxyArray[2]);
// console.log(proxyArray[-1]);
// proxyArray[-2] = 10;
// console.log(proxyArray);

//question1: Create a proxy that makes an object read-only, throwing an error when someone attempts to modify it.

function createReadOnlyObj(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      throw new Error("No Modified");
    },
  });
}
const obj = {
  name: "Dipesh",
  age: "25",
  isEngineer: true,
};
const proxyObj = createReadOnlyObj(obj);
// proxyObj.isEngineer = false;

//question :3 Write a proxy that validates properties before they're set (e.g., ensuring an 'age' property is always a number).

function anotherValidateProperty(obj) {
  const validators = {
    age: (value) => {
      if (typeof value !== "number" || isNaN(value)) {
        throw new Error("age must be number");
      }
      if (value < 0 || value > 120) {
        throw new Error("age must be between 0 and 120");
      }
      return true;
    },
    email: (value) => {
      if (typeof value !== "string" || !value.includes("@")) {
        throw new Error("Email address should be valid");
      }
      return true;
    },
  };
  return new Proxy(obj, {
    set(target, prop, value) {
      if (validators[prop]) {
        validators[prop](value);
      }
      target[prop] = value;
      return true;
    },
  });
}
const person = {};
const validatedPerson = anotherValidateProperty(person);
// try {
//   validatedPerson.age = 25;
//   console.log("Valid age set:", validatedPerson.age);

//   validatedPerson.age = "twenty-five";
//   console.log("This shouldn't print");
// } catch (error) {
//   console.log("Error caught:", error.message);
// }

// questions:4 Create a proxy that returns a default value for any property that doesn't exist.

function returnDefaultValue(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      if (!target.hasOwnProperty(prop)) {
        return "Doesnot Exists";
      }
      return target[prop];
    },
  });
}

const person2 = {
  name: "Ramesh",
  age: 20,
  active: false, // A falsy value
  score: 0, // Another falsy value
};
const proxyUser = returnDefaultValue(person2);
try {
  console.log(proxyUser.name); // "Ramesh"
  console.log(proxyUser.age); // 20
  console.log(proxyUser.active); // false (not "Doesnot Exists")
  console.log(proxyUser.score); // 0 (not "Doesnot Exists")
  console.log(proxyUser.isEngineer);
} catch (error) {
  console.log("Error :", error.message);
}
