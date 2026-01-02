// Destructuring :  Extract values from array or objects
//                  Then assign then to variables in a conveniente way.
//                  [] = extract from array.
//                  {} = extract from object


// CASE-1 (variables == values)
let arr1 = ["Apple", "1kg", 200, "hyderabad"];
let [fruit, weight, price, loc] = arr1;

console.log("CASE 01")
console.log("Fruit", fruit);
console.log("Weight", weight);
console.log("Price", price);
console.log("Location", loc);

// CASE-2 (To skip some values)
let [f1, , p1] = arr1

console.log("")
console.log("CASE 02")
console.log("Fruit", f1)
console.log("Price", p1)

// CASE-3 (Rest of the values)
let [f2, w2, ...rest] = arr1

console.log("")
console.log("CASE 03")
console.log("Fruit", f2)
console.log("Weight", w2)
console.log("Rest values", rest)