//  CONVERSION AND OPERATION
/*
Here We will discuss about the datatype conversion from one to another.
*/

// Conversion to number.
const age = true;

let value = Number(age);
// console.log(value)
// console.log(typeof value);

/*  
    a) "33" -> 33 (number type)
    b) "abc34" -> NaN (number type)
    c) "" -> 0 (number type)
    d) true -> 1 (number type)
    e) false -> 0 (number type)
    f) null -> 0 (number type)
    g) undefined -> NaN (number type)
*/

// CONVERSION TO BOOLEAN

const playerName = undefined;

let boolConverter = Boolean(playerName);

console.log(boolConverter);
console.log(typeof boolConverter);

/*
    a) true/false -> true/false (boolean type) 
    b) "" -> false (boolean type)
    c) "abcd" -> true (boolean type)
    d) 0 -> false (boolean type) 
    e) 133 -> true (boolean type) non zero values -> true
    f) null -> false (boolean value)
    g) undefined -> false (boolean value)
*/
