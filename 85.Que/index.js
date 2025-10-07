function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

console.log(isNullOrUndefined(null)); // true
console.log(isNullOrUndefined(undefined)); // true
console.log(isNullOrUndefined(0)); // false
