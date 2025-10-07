const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Union
const union = new Set([...setA, ...setB]);

// Intersection
const intersection = new Set([...setA].filter((x) => setB.has(x)));

// Difference (Elements in A not in B)
const difference = new Set([...setA].filter((x) => !setB.has(x)));

console.log(union, intersection, difference);
