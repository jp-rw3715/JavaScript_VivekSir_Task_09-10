function numberRange(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
}

function charRange(startChar, endChar) {
  let result = [];
  for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt(0); i++) {
    result.push(String.fromCharCode(i));
  }
  return result;
}

console.log(numberRange(1, 5)); // [1,2,3,4,5]
console.log(charRange("a", "e")); // ['a','b','c','d','e']
