class Holiday {
  /*
Challenge:
    1. Make 'price' a private field.
    2. Create a getter for price which appends a $ sign 
       to the front and displays it to a max of 2 decimal 
       places. 
    3. Create a setter for price which updates price with a 
       new price.
    4. Test! 
*/
  #destination;
  #price;
  constructor(destination, price) {
    this.#destination = destination;
    this.#price = price;
  }

  get destination() {
    return this.#destination;
  }

  set destination(newDestination) {
    if (typeof newDestination !== "string" || newDestination.length <= 0) {
      throw new Error("Destination not valid");
    }
    this.#destination = newDestination;
  }
  get price() {
    return `${this.#price}`;
  }
  set price(newPrice) {
    if (typeof newPrice !== "number" || newPrice <= 0) {
      throw new Error("Invalid type of price");
    }
    this.#price = newPrice.toFixed(2);
  }
}

const safari = new Holiday("Kenya");
safari.price = 100;
console.log(safari.price);
