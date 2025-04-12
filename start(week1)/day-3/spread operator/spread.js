const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

function findPriceExtremes(arr) {
  /*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr); //???
  console.log(`The highest average share price was ${highest}`);
  console.log(`The lowest average share price was ${lowest}`);
}

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
// findPriceExtremes(averageSharePriceByMonthQ1);
// findPriceExtremes(averageSharePriceByMonthQ2);
// findPriceExtremes(averageSharePriceByMonthQ3);
// findPriceExtremes(averageSharePriceByMonthQ4);

//spread operator is used for shallow copy of array or objects it means only first layer copy and when there is deep nested value it still holds reference of original objects

const user1 = {
  name: "user1",
  age: 20,
  learned: ["html", "css", "js"],
};

const user2 = { ...user1 };
user2.learned[0] = "react";
// console.log(user1);
// console.log(user2);

//{ name: 'user1', age: 20, learned: [ 'react', 'css', 'js' ] }
//{ name: 'user1', age: 20, learned: [ 'react', 'css', 'js' ] }
/**
 * this is called shallow copy because one level only copy but the deep nested level it's still hold reference value
 */

//Object.assign() also do shallow copy

//for deep clone or copy we used structuredClone

const user3 = structuredClone(user2);
console.log(user3);
user3.learned[2] = "TS";
console.log(user2);
console.log(user3);

/**
 *   { name: 'user1', age: 20, learned: [ 'react', 'css', 'js' ] }
     { name: 'user1', age: 20, learned: [ 'react', 'css', 'js' ] }
    { name: 'user1', age: 20, learned: [ 'react', 'css', 'TS' ] }
 */

// it's is new method so every browser might not support but now it's almost support by every browser except IE
