// .forEach()

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFunc) {
    for (let i = 0; i < this.length; i++) {
      userFunc(this[i], i);
    }
  };
}

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//   console.log(val);
// });
// arr.myForEach((val) => {
//   console.log(val);
// });

//.map()

//return new array
//pass value, index in callback function

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i);
      result.push(value);
    }
    return result;
  };
}

const nums = [2, 3, 4, 5];
// const double = nums.map((num) => num * 2);
// console.log(double, "double");

// const triple = nums.myMap((num) => num * 3);
// console.log("triple ", triple);

//.reduce()
const total = nums.reduce((acc, currentNum) => {
  return acc + currentNum;
});
const filterElement = nums.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr);
  }

  return acc;
}, []);
console.log(filterElement);

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, startValue) {
    let result = startValue;

    for (let i = 0; i < this.length; i++) {
      const element = cb(startValue, this[i]);
      result += element;
    }

    return result;
  };
}

const total2 = nums.myReduce((acc, currentNum) => {
  return acc + currentNum;
}, 0);

console.log(total);
console.log(total2);

const filterElement2 = nums.myReduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr);
  }

  return acc;
}, []);
console.log(filterElement);
