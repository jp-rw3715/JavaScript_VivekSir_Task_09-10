let num = 153;
let digits = num.toString().split('');
let sum = digits.reduce((a, d) => a + Math.pow(+d, digits.length), 0);
console.log(sum === num ? "Armstrong" : "Not Armstrong");
