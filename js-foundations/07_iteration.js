const products = [
  { name: "Laptop", price: 1200 },
  { name: "Keyboard", price: 75 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 300 },
  { name: "Webcam", price: 50 },
];

//total sales
const totalSales = products.reduce((acc, productPrice) => {
  return acc + productPrice.price;
}, 0);
console.log("total Sales", totalSales);

// products.forEach((product) => {
//   let total = 0;
//   total += product.price;
//   console.log("total sales", total);
// });

const inventory = [
  { name: "Laptop", stock: 10 },
  { name: "Keyboard", stock: 100 },
  { name: "Mouse", stock: 50 },
  { name: "Monitor", stock: 30 },
  { name: "Webcam", stock: 60 },
];
const lowStock = inventory.filter((item) => item.stock < 50);
console.log("low  stock", lowStock);

const userActivity = [
  { user: "Alice", activityCount: 10 },
  { user: "Bob", activityCount: 200 },
  { user: "Charlie", activityCount: 15 },
];

const mostActiveUser = userActivity.reduce(
  (mostActive, user) =>
    user.activityCount > mostActive.activityCount ? user : mostActive,
  userActivity[0]
);
console.log("most active user", mostActiveUser);

console.log(
  userActivity.filter((user) => {
    return user.activityCount !== 10;
  })
);
