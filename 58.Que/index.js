const toEncode = "Encode this!";
const encoded = btoa(toEncode); // modern browsers only
console.log(encoded); // "RW5jb2RlIHRoaXMh"
// Note: btoa converts a string to Base64 format[web:1]
