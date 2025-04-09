const guestNumber = 5;

function calculatePizzaSize(guests) {
  let pizzaSize = "";
  if (guests === 0) {
    return "You can enjoy full size of pizza";
  } else if (guests <= 2) {
    pizzaSize = "small";
  } else if (guests <= 6) {
    pizzaSize = "medium";
  } else {
    pizzaSize = "large";
  }
  return `you have invited ${guests} guests so you will go for ${pizzaSize} size pizza`;
}
console.log(calculatePizzaSize(guestNumber));
console.log(calculatePizzaSize(8));
console.log(calculatePizzaSize(1));
console.log(calculatePizzaSize(0));
