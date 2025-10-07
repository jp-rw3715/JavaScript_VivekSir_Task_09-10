function isFloat(num) {
  return Number(num) === num && num % 1 !== 0;
}

console.log(isFloat(4.5)); // true
console.log(isFloat(4)); // false
