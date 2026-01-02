// Destructuring :  Extract values from array or objects
//                  Then assign then to variables in a conveniente way.
//                  [] = extract from array.
//                  {} = extract from object

// Array Destructuring
// CASE-1 (variables == values)
let arr1 = ["Apple", "1kg", 200, "hyderabad"];
let [fruit, weight, price, loc] = arr1;

// console.log("CASE 01")
// console.log("Fruit", fruit);
// console.log("Weight", weight);
// console.log("Price", price);
// console.log("Location", loc);

// CASE-2 (To skip some values)
let [f1, , p1] = arr1

// console.log("")
// console.log("CASE 02")
// console.log("Fruit", f1)
// console.log("Price", p1)

// CASE-3 (Rest of the values)
let [f2, w2, ...rest] = arr1

// console.log("")
// console.log("CASE 03")
// console.log("Fruit", f2)
// console.log("Weight", w2)
// console.log("Rest values", rest)


// SWAPPING VARIABLES (without 3rd variable)
let var1 = 100;
let var2 = 200;
// console.log("");
// console.log("Before Swaping");
// console.log("var1",var1);
// console.log("var2",var2);

// Swapping process
[var1, var2] = [var2, var1];

// console.log("After Swaping");
// console.log("var1",var1);
// console.log("var2",var2);


//  Object Destructuring
object1 = {
    employeeId: "emp2001",
    employeeName: "Raju",
    employeeStatus: "active",
}

let { employeeId: emp_id, employeeName: emp_name, employeeStatus: emp_status, default_val = "default_value" } = object1;
console.log("Employee ID -", emp_id)
console.log("Employee Name -", emp_name)
console.log("Employee Status -", emp_status)
console.log("Default Value -", default_val)

// Nested Object Destructuring
object2 = {
    food: "Chips",
    type: {
        potato: "lays",
        snacks: "soya stics"
    }
}

let { food, type: { potato, snacks } } = object2;
console.log("Food -", food)
console.log("potato -", potato)
console.log("snacks -", snacks)
