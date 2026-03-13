// In this module I discuss about the string datatype.

// string declaration direct passing string value
const userName = "Galileo Galilei";

// console.log(userName);
// console.log(userName[0]);
// console.log(`Hello and welcone ${userName}.`); // string interpolation by backtick

// by string constructure
// const userAddress = new String("Jabalpur");
// console.log(userAddress);
// console.log(userAddress[0]);

const myString = "Apple Is Red.";

// 1. String Indexing

// console.log(myString[10]); // not allowed -ve indexing
// console.log(myString.charAt(0)); // not allowed -ve indexing

// 2. String length

// console.log(myString.length); // total no of character

// 3. at()
// console.log(myString.at(-13))   // allow -ve index as python only used with at()

// 4. slice()
// console.log(myString.slice(0, -1)) // allow -ve indexing

// 5. substring()
console.log(myString.substring(3))
