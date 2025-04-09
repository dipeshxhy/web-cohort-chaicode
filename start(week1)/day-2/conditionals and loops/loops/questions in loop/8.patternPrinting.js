//Write a function that prints the following pattern using loops:

/*
 *
 **
 ***
 ****
 *****
 */

function printPattern(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printPattern(5);

function printPatternInDown(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = n; j >= i; j--) {
      row += "*";
    }
    console.log(row);
  }
}

printPatternInDown(5);
