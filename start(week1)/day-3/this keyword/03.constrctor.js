function Character(name) {
  this.name = name;
  this.collectedItemsArr = [];

  this.addItem = function (item) {
    this.collectedItemsArr.push(item);
    console.log(`${this.name} now  has: ${this.collectedItemsArr.join(", ")}`);
  };
}

const merlin = new Character("Merlin", "wound");
merlin.addItem("wound");
merlin.addItem("portion");
