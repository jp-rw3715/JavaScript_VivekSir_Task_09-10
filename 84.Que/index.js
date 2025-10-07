function getFileExtension(filename) {
  return filename.split(".").pop();
}

console.log(getFileExtension("document.txt")); // "txt"
