let n = 13;
let isPrime = n > 1 && ![...Array(n-2)].map((_,i)=>i+2).some(i=>n%i===0);
console.log(isPrime ? "Prime" : "Not Prime");
