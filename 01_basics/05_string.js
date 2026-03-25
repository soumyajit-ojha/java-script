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

const myString = "ABCDabcd";

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
// console.log(myString.substring(4, 6))

// toUpperCase()
// console.log(myString.toUpperCase())

// toLowercase()
// console.log(myString.toLowerCase())

// trim()
// console.log(`--${myString.trim()}--`);
// console.log(`--${myString}--`);

// includes()
// console.log(myString.includes("dA")); // check exiatance of substring.

// startsWIth()
// console.log(myString.startsWith("d")); // check the main str start with given sub str.

// endsWith()
// console.log(myString.endsWith("D"));  // check the main str ends with given sub str.

// indexOf()
// console.log(myString.indexOf("d")); // if sub str doesnot match return -1 or return the first index.

// lastIndexOf()
// console.log(myString.lastIndexOf("Az"))  // if sub str doesnot match return -1 or return the last index.

// replace()
// console.log(myString.replace("ABCD", "WXYZ")); // it replace only first occurance.

// replaceAll()
// console.log(myString.replaceAll("ABCD", "WXYZ")); // it replace only first occurance.

// split()
// console.log(myString.split(" "))

// repeat()
// console.log(myString.repeat(2)); // it create a new str by repeating the original one.

// concat()
// const st1 = "Hello";
// let space = " ";
// const st2 = "World";
// console.log(st1.concat(space.concat(st2))); // this method merge two string into one.

// match()
// let st = "Apple43564";
// console.log(st.match("pple"));  // it return match to pattern if exist

// search()
// let st = "Apple43564";
// console.log(st.search("pple"));  // it return the index number of the pattern if exist. not exist -1
