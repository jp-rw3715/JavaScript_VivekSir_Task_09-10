let deck = [];
["Hearts", "Diamonds", "Clubs", "Spades"].forEach(suit => {
  for(let i=1; i<=13; i++) deck.push(i + " of " + suit);
});
for(let i=deck.length-1; i>0; i--){
  let j = Math.floor(Math.random() * (i+1));
  [deck[i], deck[j]] = [deck[j], deck[i]];
}
console.log(deck);
