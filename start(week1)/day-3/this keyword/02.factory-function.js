function gamer(name, score) {
  return {
    name,
    score,
    incrementScore() {
      this.score++;
    },
  };
}

const alice = gamer("Alice", 6);
const James = gamer("James", 10);

alice.incrementScore();
alice.incrementScore();
alice.incrementScore();

James.incrementScore();
James.incrementScore();

console.log(alice.score);
console.log(James.score);
