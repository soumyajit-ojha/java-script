/*
function: A block of resuable code to perfom a specific task.
Functions are declared by keyword `function`. 
parameters: the variables used in function definition or function creation.
arguments: the values passed to function while invoked ( function call ).
*/


// 01. Simple fuction
function addTwoNums(n1, n2) {
    return n1 + n2;
}

// res = addTwoNums(10, 30)
// console.log(res)


// 02 function with parameter
function sayHello(name) {
    if (!name) {
        return "name must required."
    }
    return `Hello, ${name}!`
}

// res = sayHello("Soumya")
// console.log(res)

/*
this keyword: this keyword refers to a special and dynamic reference
              that points to the object that is currently executing the code.
              This only work inside a object.
*/

shop = {
    shopId: 13579,
    shopName: "Fish Shop",
    ownner: "Baburao",
    location : "mumbai",

    welcome : function welcome(ownner) {
        return `Welcome, ${this.ownner} to clan.`
    }
}

// console.log(shop.welcome())
// shop.ownner = "Raju"
// console.log(shop.welcome())

/*
Arrow Function: a concise syntax in JavaScript for writing function expressions
    - They are also known as "fat arrow" functions because they use the => operator.
    - just remove the "function" word before () and add a "=>" after this ().
*/
const addNums = (n1, n2) => {
    return n1 + n2;
};
console.log(addNums(10, 45))

const sayHi = (name) => {
    return `Hi, ${name}.`
}
console.log(sayHi("Zoro"))

// Implicity return of arrow function: no use of return keyword
// Explicity return: use of return keyword.

const divisionTwo = (num) => (num/2);
console.log(divisionTwo(110))

