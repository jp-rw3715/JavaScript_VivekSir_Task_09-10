function splitIntoChunks(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

console.log(splitIntoChunks([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
