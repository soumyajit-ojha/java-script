// Data types in JS
/*
Premetive types: 
    1. String: A text of characters enclosed in quotes (eg. "apple")
    2. Number: A number representing a mathematical value (eg. 10, 20, 30.5)
    3. Bigint: A number representing a large integer (eg. )
    4. Boolean: A data type representing true or false
    5. Object: A collection of key-value pairs of data (eg. {name:"Raju", age:32})
    6. Undefined:  primitive variable with no assigned value ( eg. let a; )
    7. Null: A primitive value representing object absence ( eg. let x=null; )
    8. Symbol: A unique and primitive identifier ( eg, let x = Symbol() )

    -- typeof() = return data type of variable
    eg. let name = "Soumya";
        consol.log(typeof(name))
*/

// String Data type
let str = "This is just a text";
console.log("str -", str);
console.log("Data type -", typeof (str));

// Number data type
let num = 12345;
console.log("Num -", num)
console.log(`Data type of ${num} is ${typeof (num)}`)

// Bigint
let bgInt = 1234567895973982912069683n // n is the flag of bigint
console.log("bgInt -", bgInt)
console.log(`Data type of ${bgInt} is ${typeof (bgInt)}`)

// Boolean:
let res = !true;
console.log("res -", res)
console.log(`Data type of ${res} is ${typeof (res)}`)

// Object:
let obj = {
    user_name: "Skud",
    email: "user@email.com",
    phone: "+91 7878986574",
    is_ok: true
};

console.log(obj)
console.log(typeof (obj))

// Undefined: this is the absence of value
let v;
console.log(v)
console.log(typeof (v))

// null: this is the absence of object we can replace this to any value.
let x = null;
let y = null;
// [x, y] = [100, 200];
console.log(x, y)
console.log(typeof (x), typeof (y))
