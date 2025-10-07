function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(1, 10)); // Random integer between 1 and 10 inclusive
