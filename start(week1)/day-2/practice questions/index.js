//create an array with diferent types of teas

const teas = [
  "Masala tea",
  "Black tea",
  "Herbal tea",
  "Lemon tea",
  "Milk tea",
  "Oolong tea",
];

console.log(teas);

// add Chamomile tea on list
teas.push("Chamomile Tea");
console.log(teas);

//Remove Oolong tea
const oolongIndex = teas.indexOf("Oolong tea");
teas.splice(oolongIndex, 1);
console.log(teas);

//filter te teas that only include caffeinated tea

function filterTea(teas) {
  let caffeinatedTeas = [];
  for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "Herbal tea") {
      continue;
    }
    caffeinatedTeas.push(teas[i]);
  }
  return caffeinatedTeas;
}

console.log(filterTea(teas));

//sort the list of tea in alphabetical order
const sortedTea = teas.sort();
console.log(sortedTea);

//count number of caffeinated teas
const total = filterTea(teas).length;
console.log(total); //5

// make all tea to uppercase

const upperCaseTea = teas.map((tea) => tea.toUpperCase());
console.log(upperCaseTea);

//find tea with most character

function findLongestCharacterTea(teas) {
  let longestTea = teas[0];
  for (let i = 1; i < teas.length; i++) {
    if (teas[i].length > longestTea.length) {
      longestTea = teas[i];
    }
  }
  return longestTea;
}

console.log(findLongestCharacterTea(teas));

//reverse teas

const reversedTeas = teas.reverse();
console.log(reversedTeas);
