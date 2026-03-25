// Premitive Data types (called by value)
/*
    a) String
    b) Number
    c) BigInt
    d) boolean
    e) null
    f) undefined
    g) symbol
*/

let numericVar = 123;
let bigintVar = 874957620868208672984n;
let stringVar = "thestringvar";
let boolVar = false;
let nullVar = null;
let undefinedVar;
let s1 = Symbol("132");
let s2 = Symbol("351");

console.log(`Type of ${numericVar} is: ${typeof numericVar}`);
console.log(`Type of ${bigintVar} is: ${typeof bigintVar}`);
console.log(`Type of ${stringVar} is: ${typeof stringVar}`);
console.log(`Type of ${boolVar} is: ${typeof boolVar}`);
console.log(`Type of ${nullVar} is: ${typeof nullVar}`);
console.log(`Type of ${undefinedVar} is: ${typeof undefinedVar}`);
console.log(s1 === s2);

// Reference (Non-Premitive)
/*
    a) object
    b) array
    c) function
*/
let myObj = {
  name: "Standard Apple",
  price: "2000",
};

let myArray = ["Apple", "Banana", "Cherry"];
let myFunction = function () {
  console.log("My Function");
};
console.log(`Type of ${myObj} is: ${typeof myObj}`);
console.log(`Type of ${myArray} is: ${typeof myArray}`);
console.log(`Type of Function ${typeof myFunction}`);
