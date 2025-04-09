//Create a function that generates a multiplication table from 1 to n using nested loops.

function generateTable(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}
generateTable(5);
