// Some More array methods

// Concate arraies.

let bgmiCreatros = ["bixi", "jonathon"];
let pubgCretrors = ["Feitx", "Capi"];

// pubgCretrors.push(bgmiCreatros);
// console.log("BGMI:", bgmiCreatros);

// let allCreator = pubgCretrors.concat(bgmiCreatros);
// console.log("all creators: ", allCreator);

// spread operator
// let allGamer = [...pubgCretrors, ...bgmiCreatros];
// console.log("All Gamer:", allGamer);

// let nestedArray = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11]], 12];
// console.log("real array", nestedArray);
// let flatteredArray = nestedArray.flat(4);
// console.log("Flatered array", flatteredArray);

// Create array from other object,
// Array.form(): create array
let a1 = Array.from("apple");
let a2 = Array.from("123456");
console.log(a1);
console.log(a2);

let n1, n2, n3, n4;
n1 = 100;
n2 = 200;
n3 = 300;
n4 = 400;
let a3 = Array.of(n1, n2, n3, n4);
console.log(a3);
