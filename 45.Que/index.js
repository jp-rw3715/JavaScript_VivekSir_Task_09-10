const obj = { x: 10, y: 20 };
for (const key in obj) {
  console.log(key, obj[key]); // Output: x 10, y 20
}
// or using Object.keys:
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
