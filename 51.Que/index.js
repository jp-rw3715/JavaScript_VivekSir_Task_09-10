// Using toLocaleString for currency formatting
const amount = 123456.789;
const formatted = amount.toLocaleString('en-IN', {
  style: 'currency',
  currency: 'INR'
});
console.log(formatted); // "₹1,23,456.79"
// Note: toLocaleString converts numbers to locale-specific currency strings[web:1]


