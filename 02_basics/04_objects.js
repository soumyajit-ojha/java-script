// singletone object

const myObject = new Object();

const jsObj = {
  email: "soumya@flipcart.com",
  firstName: "Soumya",
  lastName: "Ojha",
};

// console.log(jsObj.email);
// console.log(jsObj.data.profile.firstName);
// console.log(jsObj.data.profile.lastName);

// Create OBJECT from multiple objects.
const ob1 = { 1: "a", 12: "b" };
const ob2 = { 2: "a", 3: "b" };
const ob3 = { 4: "a", 5: "b" };

let mergedObj = Object.assign({}, ob1, ob2, ob3);
// console.log(mergedObj);

let spreadObj = { ...ob1, ...ob2, ...ob3 };
// console.log(spreadObj);

// Object methods
let objKeys = Object.keys(jsObj);
let objValues = Object.values(jsObj);
let objEntries = Object.entries(jsObj);
console.log(objKeys);
console.log(objValues);
console.log(objEntries);
