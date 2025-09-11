const student = { name: "John", age: 22, hobbies: ["reading"] };
delete student.age; // or delete student['age'];
console.log(student); // Output: { name: 'John', hobbies: ['reading'] }
