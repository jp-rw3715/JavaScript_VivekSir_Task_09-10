// Generates a random alphanumeric string of length 8
function getRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
console.log(getRandomString(8)); // e.g., "aB3kLzQ9"
// Note: Math.random and charAt are used to select random characters[web:1]
