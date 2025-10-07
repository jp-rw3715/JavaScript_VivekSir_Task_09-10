function intersectArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter((item) => set2.has(item));
}

console.log(intersectArrays([1, 2, 3], [2, 3, 4])); // [2, 3]
