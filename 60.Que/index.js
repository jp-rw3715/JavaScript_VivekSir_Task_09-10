const messyText = "Line 1\nLine 2\rLine 3\r\nLine 4";
const replaced = messyText.replace(/(\r\n|\r|\n)/g, " ");
console.log(replaced); // "Line 1 Line 2 Line 3 Line 4"
// Note: Replace all forms of line breaks using a regex[web:1]
