function removeWhitespace(text) {
  return text.replace(/\s/g, "");
}

console.log(removeWhitespace(" a b  c ")); // "abc"
