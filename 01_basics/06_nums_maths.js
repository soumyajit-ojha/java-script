// In this module I discussed about maths and numbers.

/*
A Number in JavaScript is a primitive data type used to represent numeric values such as integers, floating-point numbers,
and special numeric values.
*/

// Numeric Literals
/*

1. Decimal eg. let a = 10;
2. Floating point eg. let b = 3.14;
3. Exponential notation
    let c = 5e3;   // 5000
    let d = 5e-3;  // 0.005
4. Binary eg. let bin = 0b1010;
5. let oct = 0o12;
6. let hex = 0xFF;

Special Numeric Values
1. NaN (Not a Number)
    console.log(0 / 0);
2. Numeric Precision Limits
    Number.MAX_SAFE_INTEGER = 9007199254740991
    Number.MIN_SAFE_INTEGER = -9007199254740991

OPERATIONS

a) Arithmatic Operations
-> +, -, *, /, **, %

b) Unary Operations
-> Increment
    let a = 5;
    a++;

-> Decrement
    let a = 5;
    a--;
    
-> Unary Plus
    let x = +"10";
    console.log(x);
*/

// Important Number Methods

// a) toFixed() -> Formats number with fixed decimal places.
// let n1 = 5.6789;
// console.log(num.toFixed(2));


// b) toPrecision() -> Formats number with specified significant digits.
// let num = 123.556;
// console.log(num.toPrecision(4));


// c) toString() -> Converts number to string.
// let num = 255;
// let stNum = num.toString();
// console.log(stNum);

// d) valueOf() -> Returns primitive value.
let num1 = new Number(10);
console.log(num1.valueOf());


// Important Static Number Methods
// These belong to the Number constructor.

// a) Number.isNaN() -> Checks if value is NaN.
// b) Checks if value is NaN.
// c) Number.isFinite()
// d) Number.parseInt() -> Converts string to integer.
// e) Number.parseFloat()

