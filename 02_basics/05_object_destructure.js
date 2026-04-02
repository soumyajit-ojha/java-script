// Destructuring an object

/*
Object destructuring is a syntax in JavaScript that allows you to "unpack" values from objects into distinct variables. Instead
of accessing properties one by one using dot notation, you can extract multiple pieces of data in a single line. 
*/

const user = { name: "Alex", age: 25 };

// const name = user.name;
// const age = user.age;

const { name: name1, age: age1 } = user;

console.log("Name", name1);
console.log("age", age1);
