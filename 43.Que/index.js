const person = { id: 1, name: "John" };
// Using 'in'
console.log("name" in person); // true
// Using hasOwnProperty
console.log(person.hasOwnProperty("id")); // true
