// Array: Array is a collection of elements (both homogenious and heterogemious) stored in contegious memory alocation.

let myArray = [1, 2, 3, 12.5, "Apple", { name: "Silu", Age: 25 }];
// console.log("My Array: ", myArray);

// create array
// using squire bracket

const numberArray = [1, 2, 3, 4, 5];
// console.log("Number Array", numberArray);
// console.log("Data type: ", typeof numberArray);

// using new keyword

let objArray = new Array("apple", "Banana", "Cherry");
// console.log("Array Object: ", objArray);
// console.log("Data Type: ", typeof objArray);

// ARRAY METHODS
const numArray = [1, 2, 3, 4, 5, 6];

// 1. push(): add element at the end.
// numArray.push(100);
// console.log(numArray);

// 2. pop(): remove the last elememt of array and return it.
// let popedItem = numArray.pop();
// console.log("popped", popedItem);
// console.log(numArray);

// 3. shift(): remove the first element of array and return it
// let x = numArray.shift();
// console.log("shifted", x);
// console.log(numArray);

// 4.includes(): check for item existance in array (like memborship)
// let res = numberArray.includes(5);
// console.log(res);
// console.log(typeof res);

// 5. indexof() : return the index number of the Item.
// let ind = numberArray.indexOf(1);
// console.log("index :", ind);
// console.log(typeof ind);

// 6. join() : to create a string from a array
// const strArray = ["apple", "tastes", "good."];
// let str = strArray.join(" ");
// console.log(str);

// 7. Slice: return a portion of array from the original array without modifying the original.
let originalArray = [1, 2, 3, 4, 5, 6];

let slicedArray = originalArray.slice(2, 5); // don't include the end index
console.log("sliced: ", slicedArray);
console.log("Original:", originalArray);

// 8. Splice: return the part of array from original by spliting it. it modify the original one.
let splicedArray = originalArray.splice(1, 3);
console.log("Spliced", splicedArray);
console.log("Original:", originalArray);
