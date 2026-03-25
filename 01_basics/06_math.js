// Tn this module I discussed about Math.

// console.log(Math);
// console.log(Math.abs(-12));
// console.log(Math.round(4.6));
// console.log(Math.ceil(10.5));
// console.log(Math.floor(10.9));
// console.log(Math.max(4, 7, 2, 43, 65));
// console.log(Math.min(21, 32, 57, 87, 56));

// Random number generation
rand_num = Math.random(); // generate a random number in 0 to 1.
console.log("Random Number", rand_num);

// random number in specific range (min and max).
min = 10;
max = 20;
random_num = Math.floor(Math.random() * (max - min) + 1 + min);
console.log(random_num);
