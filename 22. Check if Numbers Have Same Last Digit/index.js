let a = 137, b = 47, c = 117;
let same = (a%10 === b%10) && (b%10 === c%10);
console.log(same ? "Same last digit" : "Different last digits");
