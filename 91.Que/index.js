function isFunctionVariable(variable) {
  return typeof variable === "function";
}

console.log(isFunctionVariable(function () {})); // true
console.log(isFunctionVariable(123)); // false
