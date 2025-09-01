let x = 36, y = 60;
while(y !== 0) [x, y] = [y, x % y];
console.log(x);
