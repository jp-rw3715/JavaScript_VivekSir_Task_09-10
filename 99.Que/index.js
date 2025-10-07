function doOperation(x, operation) {
  return operation(x);
}

function square(n) {
  return n * n;
}

console.log(doOperation(5, square)); // 25
