const gamer = {
  name: "James",
  score: 0,
  incrementScore: function () {
    gamer.score++;
  },
};
// console.log(gamer);
// console.log(gamer.score);
// gamer.incrementScore();
// gamer.incrementScore();
// gamer.incrementScore();
// console.log(gamer.score);

// there is nicer way to do this by using this keyword
const gamer2 = {
  name: "Raju",
  score: 0,
  incrementScore: function () {
    // console.log(this)
    this.score++;
  },
};

// gamer2.incrementScore();
// gamer2.incrementScore();
// gamer2.incrementScore();
// console.log(gamer2.score);

//let's think about more when we have to make may gamers we have to add same property many times so there comes constructor function which helps to create machine

const product = {
  name: "Vanilla Lip Gloss",
  sku: "w234fg",
  stock: 276,
  getProductInfo: function () {
    // console.log(this);
    return `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`;
  },
};

const productDetails = product.getProductInfo.bind(product);
console.log(productDetails());

//it means .bind() helps to bind the value for this when we want to store function in variable
