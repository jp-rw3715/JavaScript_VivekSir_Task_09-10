const products = [
  { name: "Pen", price: 30 },
  { name: "Book", price: 20 },
];
products.sort((a, b) => a.price - b.price);
console.log(products);
// [{name:'Book',price:20},{name:'Pen',price:30}]
