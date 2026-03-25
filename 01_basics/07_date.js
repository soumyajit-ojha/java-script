// Date
let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.to())

// Create Date with parameter value

let createData = new Date(2026, 2, 24, 5, 55);
console.log(createData.toString());
console.log(createData.toDateString());
console.log(createData.toLocaleString());

// Time stamp
// let currentTime = Date.now();
// console.log(currentTime); // return miliseconds from jan-1-1970

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()); // start from 0 to 11.
console.log(newDate.getTime());  // return milisecond
