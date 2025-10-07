const odd = [1, 3, 5];
const even = [2, 4, 3, 1];
const merged = [...new Set([...odd, ...even])];
console.log(merged); // [1, 3, 5, 2, 4]
