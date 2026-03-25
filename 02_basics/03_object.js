// create object in two ways.
//  1. literal 2. constructor
// Singleton

// 1. Literal

const sym = Symbol("Key01");
const obj = {
  name: "Silu",
  location: "Hyderabad",
  [sym]: "key01", // return symbol datatype
  //   sym: "key01", // return string datatype
  login: true,
  avtive_days: ["Sunday", "Monday"],
};

// fetching data from object.
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[sym]);
console.log(obj["avtive_days"]);

// change value in object'

obj.avtive_days = ["Friday", "Thursday"];
obj.name = "Soumya";

// console.log(obj);

obj.sayHi = function () {
  console.log("Hi there.");
};
obj.sayMyName = function () {
  console.log(`Hay - ${this.name}.`);
};

console.log(obj);
console.log(obj.sayHi());
console.log(obj.sayMyName());
