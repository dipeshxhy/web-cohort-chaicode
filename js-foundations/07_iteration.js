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
// console.log("total Sales", totalSales);

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
// console.log("low  stock", lowStock);

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
// console.log("most active user", mostActiveUser);

// console.log(
//   userActivity.filter((user) => {
//     return user.activityCount !== 10;
//   })
// );

const transactions = [
  { description: "Grocery shopping", amount: 50, category: "Food" },
  { description: "New laptop", amount: 1200, category: "Electronics" },
  { description: "Monthly rent", amount: 1500, category: "Housing" },
  { description: "Dinner with friends", amount: 100, category: "Food" },
  { description: "Movie tickets", amount: 30, category: "Entertainment" },
];

//array
//category and add amount

//category:amount
const catrgorySales = transactions.reduce((acc, transaction) => {
  const { amount, category } = transaction;
  if (!acc[category]) {
    acc[category] = 0;
  }
  acc[category] += amount;
  return acc;
}, {});

// console.log("total amount", categorySales);

const tasks = [
  { description: "Grocery shopping", completed: true, priority: 3 },
  { description: "Clean the house", completed: false, priority: 2 },
  { description: "Walk the dog", completed: false, priority: 1 },
];

const inCompleteTask = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);
// console.log(inCompleteTask);

const movies = [
  { movie: "movie A", ratings: [3, 4, 2] },
  { movie: "movie B", ratings: [5, 3, 1] },
  { movie: "movie C", ratings: [4, 4, 4] },
];

// average rating of movies
function calculateAverage() {
  return movies.map((movie) => {
    let total = 0;
    movie.ratings.map((item) => {
      total += item;
    });
    let average = total / movie.ratings.length;
    return {
      ...movie,
      average,
    };
  });
}
console.log(calculateAverage());

const movieAverage = movies.map((movie) => {
  const total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  const average = total / movie.ratings.length;
  movie.averageRatings = average;
  //   return {
  //     movie: movie.movie,
  //     average: average,
  //   };
  return movie;
});
console.log(movieAverage);
console.log(movies);
