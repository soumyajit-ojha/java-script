# JavaScript 'this' Keyword Guide

A comprehensive guide to understanding the `this` keyword in JavaScript, including its behavior in different contexts, methods to manipulate it, and practical examples.

---

## Table of Contents

- [What is the 'this' Keyword?](#what-is-the-this-keyword)
- [Value of 'this' in Global Scope](#value-of-this-in-global-scope)
- [Value of 'this' Inside a Function](#value-of-this-inside-a-function)
- [Value of 'this' Inside an Object's Method](#value-of-this-inside-an-objects-method)
- [call(), apply(), and bind() Methods](#call-apply-and-bind-methods)
- [Value of 'this' Inside Arrow Functions](#value-of-this-inside-arrow-functions)
- [this Inside Nested Functions](#this-inside-nested-functions)
- [this Inside DOM Event Handlers](#this-inside-dom-event-handlers)
- [Summary Table](#summary-table)

---

## What is the 'this' Keyword?

The `this` keyword in JavaScript is a special variable that refers to the **context** in which a function is executed. Think of it as "Who is calling me right now?"

The value of `this` is **not determined by where the function is written**, but by **how the function is called**.

### Key Point
> `this` is dynamically determined at runtime based on the execution context.

---

## Value of 'this' in Global Scope

In the global scope (outside of any function), `this` refers to the **global object**.

### In Browsers
```javascript
console.log(this); // Window object
```

### In Node.js
```javascript
console.log(this); // Global object (or empty object in modules)
```

---

## Value of 'this' Inside a Function

The value of `this` inside a function depends on two things:
1. How the function is called
2. Whether strict mode is enabled

### Non-Strict Mode

```javascript
function showThis() {
  console.log(this);
}

showThis(); // Window object (in browsers)
```

### Strict Mode

```javascript
"use strict";

function showThis() {
  console.log(this);
}

showThis(); // undefined
```

### Called with window.func()

```javascript
"use strict";

function showThis() {
  console.log(this);
}

window.showThis = showThis;
window.showThis(); // Window object (explicitly called on window)
```

---

## Value of 'this' Inside an Object's Method

When a function is called as a method of an object, `this` refers to **the object that owns the method**.

### Example

```javascript
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

person.greet(); // "Hello, I am Alice"
// 'this' refers to the 'person' object
```

### Important: Losing Context

```javascript
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

const greetFunc = person.greet;
greetFunc(); // "Hello, I am undefined"
// 'this' is now undefined (strict mode) or Window (non-strict)
```

---

## call(), apply(), and bind() Methods

These three methods allow you to **manually control** what `this` refers to inside a function.

### 1. call() Method

**Purpose**: Calls a function immediately with a specified `this` value and individual arguments.

**Syntax**: `func.call(thisArg, arg1, arg2, ...)`

```javascript
function introduce(greeting, punctuation) {
  console.log(greeting + ", I am " + this.name + punctuation);
}

const person = { name: "Bob" };

introduce.call(person, "Hello", "!"); 
// Output: "Hello, I am Bob!"
```

### 2. apply() Method

**Purpose**: Calls a function immediately with a specified `this` value and arguments as an **array**.

**Syntax**: `func.apply(thisArg, [arg1, arg2, ...])`

```javascript
function introduce(greeting, punctuation) {
  console.log(greeting + ", I am " + this.name + punctuation);
}

const person = { name: "Bob" };

introduce.apply(person, ["Hello", "!"]); 
// Output: "Hello, I am Bob!"
```

### 3. bind() Method

**Purpose**: Creates a **new function** with a permanently bound `this` value. Does NOT call the function immediately.

**Syntax**: `const boundFunc = func.bind(thisArg, arg1, arg2, ...)`

```javascript
function introduce(greeting, punctuation) {
  console.log(greeting + ", I am " + this.name + punctuation);
}

const person = { name: "Bob" };

const boundIntroduce = introduce.bind(person, "Hello");
boundIntroduce("!"); 
// Output: "Hello, I am Bob!"
```

### When to Use Which?

| Method | When to Use | Example Use Case |
|--------|-------------|------------------|
| **call()** | Call function immediately with specific `this` and individual arguments | Borrowing methods from other objects |
| **apply()** | Call function immediately with specific `this` and array of arguments | Using `Math.max()` with an array |
| **bind()** | Create a new function with permanent `this` binding for later use | Event handlers, callbacks |

### Practical Example: All Three Methods

```javascript
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet(greeting, time) {
  console.log(`${greeting}, I am ${this.name}. Good ${time}!`);
}

// Using call()
greet.call(person1, "Hi", "morning"); 
// Output: "Hi, I am Alice. Good morning!"

// Using apply()
greet.apply(person2, ["Hello", "evening"]); 
// Output: "Hello, I am Bob. Good evening!"

// Using bind()
const greetAlice = greet.bind(person1);
greetAlice("Hey", "afternoon"); 
// Output: "Hey, I am Alice. Good afternoon!"
```

### Real-World Example: Math.max with apply

```javascript
const numbers = [5, 10, 15, 20];

// Math.max doesn't accept an array directly
const max = Math.max.apply(null, numbers);
console.log(max); // 20

// Modern alternative using spread operator
const maxModern = Math.max(...numbers);
console.log(maxModern); // 20
```

---

## Value of 'this' Inside Arrow Functions

Arrow functions **do NOT have their own `this`**. Instead, they inherit `this` from their **lexical scope** (the surrounding context where they were defined).

### Regular Function vs Arrow Function

```javascript
const person = {
  name: "Charlie",
  
  // Regular function
  regularGreet: function() {
    console.log("Regular:", this.name);
  },
  
  // Arrow function
  arrowGreet: () => {
    console.log("Arrow:", this.name);
  }
};

person.regularGreet(); // "Regular: Charlie"
person.arrowGreet();   // "Arrow: undefined" (this refers to global scope)
```

### Why Arrow Functions are Useful

```javascript
const person = {
  name: "David",
  hobbies: ["reading", "coding"],
  
  showHobbies: function() {
    // Arrow function inherits 'this' from showHobbies
    this.hobbies.forEach(hobby => {
      console.log(this.name + " likes " + hobby);
    });
  }
};

person.showHobbies();
// Output:
// "David likes reading"
// "David likes coding"
```

### Important Rule
> Arrow functions cannot be used with `call()`, `apply()`, or `bind()` to change their `this` value—it's always lexically bound.

---

## this Inside Nested Functions

### Problem with Regular Nested Functions

```javascript
const person = {
  name: "Eve",
  greet: function() {
    console.log("Outer:", this.name); // Works fine
    
    function innerFunc() {
      console.log("Inner:", this.name); // Loses context!
    }
    
    innerFunc();
  }
};

person.greet();
// Output:
// "Outer: Eve"
// "Inner: undefined"
```

### Solution 1: Store 'this' in a Variable

```javascript
const person = {
  name: "Eve",
  greet: function() {
    const self = this; // Store reference
    
    function innerFunc() {
      console.log("Inner:", self.name); // Works!
    }
    
    innerFunc();
  }
};

person.greet();
// Output: "Inner: Eve"
```

### Solution 2: Use Arrow Functions (Modern Approach)

```javascript
const person = {
  name: "Eve",
  greet: function() {
    const innerFunc = () => {
      console.log("Inner:", this.name); // Inherits 'this'
    };
    
    innerFunc();
  }
};

person.greet();
// Output: "Inner: Eve"
```

---

## this Inside DOM Event Handlers

In DOM event handlers, `this` typically refers to the **element that triggered the event**.

### Regular Function in Event Handler

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  console.log(this); // The button element
  this.style.backgroundColor = "blue";
});
```

### Arrow Function in Event Handler

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log(this); // Window object (or surrounding context)
  // this.style.backgroundColor = "blue"; // Won't work as expected!
});
```

### Practical Example: Counter Button

```javascript
const counter = {
  count: 0,
  
  init: function() {
    const button = document.getElementById("counterBtn");
    
    // Using regular function - loses context
    button.addEventListener("click", function() {
      this.count++; // 'this' is the button, not counter!
      console.log(this.count); // undefined
    });
  }
};

// Better approach with arrow function
const counterFixed = {
  count: 0,
  
  init: function() {
    const button = document.getElementById("counterBtn");
    
    // Arrow function inherits 'this' from init method
    button.addEventListener("click", () => {
      this.count++; // 'this' is counter object!
      console.log(this.count); // Works correctly!
    });
  }
};
```

---

## Summary Table

| Context | Value of 'this' | Example |
|---------|----------------|---------|
| **Global Scope** | Global object (Window in browsers) | `console.log(this)` |
| **Regular Function (non-strict)** | Global object | `function() { console.log(this) }` |
| **Regular Function (strict)** | `undefined` | `"use strict"; function() { console.log(this) }` |
| **Object Method** | The object itself | `obj.method()` → `this` is `obj` |
| **Arrow Function** | Inherited from lexical scope | `() => { console.log(this) }` |
| **call() / apply()** | First argument passed | `func.call(obj)` → `this` is `obj` |
| **bind()** | Permanently bound value | `const bound = func.bind(obj)` |
| **DOM Event Handler (regular)** | Element that fired the event | `element.addEventListener('click', function() {})` |
| **DOM Event Handler (arrow)** | Surrounding lexical context | `element.addEventListener('click', () => {})` |

---

## Key Takeaways

1. **`this` is determined by how a function is called, not where it's defined**
2. **Arrow functions inherit `this` from their surrounding scope**
3. **Use `call()` for immediate invocation with individual arguments**
4. **Use `apply()` for immediate invocation with array of arguments**
5. **Use `bind()` to create a new function with permanent `this` binding**
6. **In object methods, `this` refers to the object**
7. **In DOM events, regular functions get `this` as the element, arrow functions inherit from parent**

---

## Contributing

Feel free to contribute to this guide by submitting pull requests or opening issues for any corrections or additions.

## License

This documentation is provided as-is for educational purposes.