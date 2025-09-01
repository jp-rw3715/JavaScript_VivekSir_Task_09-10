let a = 8, b = 2, op = "*";
let result;
switch(op) {
  case "+": result = a + b; break;
  case "-": result = a - b; break;
  case "*": result = a * b; break;
  case "/": result = a / b; break;
  default: result = "Unknown";
}
console.log(result);
