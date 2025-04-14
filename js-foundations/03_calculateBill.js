function calculateDiscount(total) {
  if (typeof total !== "number") {
    total = Number(total);
  }
  if (Number.isNaN(total)) {
    return "No Discount!";
  }

  if (total > 1000) {
    return Math.round(total * 0.9);
  }
  return total;
}

console.log(calculateDiscount(400));
console.log(calculateDiscount(1200));
console.log(calculateDiscount(400));
console.log(calculateDiscount("1200"));
console.log(calculateDiscount(1000));
