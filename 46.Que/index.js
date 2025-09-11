const a = { foo: 1 };
const b = { bar: 2 };
const merged = { ...a, ...b }; // Using spread operator
console.log(merged); // { foo: 1, bar: 2 }
