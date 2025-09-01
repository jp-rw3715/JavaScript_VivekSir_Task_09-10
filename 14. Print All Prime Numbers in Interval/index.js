let low = 10, high = 20;
for(let i = low; i <= high; i++){
  let isPrime = i > 1 && ![...Array(i-2)].map((_,j)=>j+2).some(j=>i%j===0);
  if(isPrime) console.log(i);
}
