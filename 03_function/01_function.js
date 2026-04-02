//
/*
In JavaScript, a function is a reusable block of code designed to perform a particular task.
You define the code once and then "call" (execute) it whenever you need it,
which prevents you from writing the same logic over and over.
*/

// function sayMyName(name) {
//   console.log(`My name is ${name}`);
// }

// // print on the console
// sayMyName("Soumya");

// function login(user = "default_user") {
//   return `${user} loggedin successfully.`;
// }

// const res = login();
// console.log(res);

// REST OPERATOR (...extra)

function sumOfNumbers(n1, n2, ...n3) {
  console.log("n3", n3);
  return n1 + n2;
}
result = sumOfNumbers(10, 20, 30, 40, 50, 60);
console.log(result);

// Handle Object

userCart = {
  username: "Soumyajit",
  cartId: "Xp-328-cd098",
  cartPrice: 367,
};

function handeObject(obj) {
  user = obj.username;
  cartPrice = obj.cartPrice;
  return `${user}'s cart price is ${cartPrice}`;
}

const userCartData = handeObject(userCart);
console.log(userCartData);

// Handle array

const myWishlist = ["sonata wrist watch", "asian shoe", "a formal shirt"];
const maxBudgetRange = ["700", "500", "500"];

function handleWidhlist(items, prices) {
  res = `${myWishlist[0]} = ${maxBudgetRange[0]}\n${myWishlist[0]} = ${maxBudgetRange[1]}\n${myWishlist[2]} = ${maxBudgetRange[2]}`;
  return res;
}

const myWishlists = handleWidhlist(myWishlist, maxBudgetRange);
console.log(myWishlists);
