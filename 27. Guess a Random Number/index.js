let secret = Math.floor(Math.random()*10) + 1; // 1 to 10
let guess = 7; // You can set this with user input
console.log(guess === secret ? "Correct!" : `Wrong, number was ${secret}`);

