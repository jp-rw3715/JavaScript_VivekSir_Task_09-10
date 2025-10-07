function add(a, b, c) {
  if (c !== undefined) return a + b + c;
  if (b !== undefined) return a + b;
  return a;
}
console.log(add(1)); // 1
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3)); // 6
