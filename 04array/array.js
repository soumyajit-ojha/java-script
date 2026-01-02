// ARRAY AND ITS METHODS
/*
Array: Array is a special datatype object where it used to store multiple values in a single variable.
    Syntax: array is defined using [].
    Indexing: Items are stored in a specific order, start from 0.

Why Array:  1. avoide variable fatigue(no need to create 100 variable to store 100 item)
            2. grouping related data (same type data into one variable)
            3. Power of looping (loop through each data to process item automatocally.)
            4. built in methods (add, remove or update items)

*/

let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr)
// console.log(arr.length)

/*
map ()
filter ()
reduce ()
find ()
forEach ()
findIndex ()
indexOf ()
lastIndexOf ()
push ()
pop ()
toString ()
join ()
slice ()
sort ()
reverse ()
*/

// 1.   map(): apply a single logic to all items in a array.
//      syntax: array.map((ele) => {return logic})
//      .map() always return a new array object.

const arr1 = [12, 13, 17, 99];
const sqr_nums = arr1.map((num) => num*num);
console.log("Numbers", sqr_nums);

// 2.   filter(): apply a condition to all but return those which pass the condition.
//      syntax: array.filter((ele) => {return logic}) ;
//      .filter() always return a new arraty object.

const nums = [13, 15, 12, 16, 19, 53];
const even_nums = nums.filter((n) => n%2 === 0);
console.log(even_nums);

// 3.   find(): Used when you have a list of items and you want to grab just one specific object
//      syntax: array:find((ele) => {return logic})
//      .find() return only one object which satisfy the condition first
const items = [10, 20, 11, 22, 33, 55, "apple"];
const even = items.find((i) => typeof(i) == "string");
console.log(even);
