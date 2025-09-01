let a = 12, b = 15;
let gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
let lcm = (a * b) / gcd(a, b);
console.log(lcm);
