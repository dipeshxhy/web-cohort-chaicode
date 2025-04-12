/**
 * 90 >='A'
 * 80 >='B'
 * 70 >='C'
 * 60 >='D'
 *  'F'
 */

function calculateGrade(mark) {
  let grade = "";
  switch (mark) {
    case mark >= 90:
      grade = "A";
      break;
    case mark >= 80:
      grade = "B";
      break;
    case mark >= 70:
      grade = "C";
      break;
    case mark >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  return `Mark is ${mark}-Grade got ${grade}`;
}
// console.log(calculateGrade(60));
// console.log(calculateGrade(30));
// console.log(calculateGrade(45));
// console.log(calculateGrade(90));

/**
 * switch statement only work with equality it only fulfill with conditions that directly match with ===
 */

function calculateGrade(mark) {
  let grade = "";
  if (mark >= 90) {
    grade = "A";
  } else if (mark >= 80) {
    grade = "B";
  } else if (mark >= 70) {
    grade = "B";
  } else if (mark >= 60) {
    grade = "C";
  } else {
    grade = "F";
  }
  return `Mark is ${mark}-Grade got ${grade}`;
}

console.log(calculateGrade(60));
console.log(calculateGrade(30));
console.log(calculateGrade(45));
console.log(calculateGrade(90));
