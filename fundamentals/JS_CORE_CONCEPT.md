# JavaScript Core Concepts Guide

A comprehensive guide to essential JavaScript concepts including hoisting, garbage collection, scope, closures, and memory management.

---

## Table of Contents

- [Hoisting](#hoisting)
- [Garbage Collector](#garbage-collector)
- [Scope](#scope)
- [Lexical Scope](#lexical-scope)
- [Closures](#closures)
- [Lexical Scope vs. Closure](#lexical-scope-vs-closure)
- [Memory Leaks](#memory-leaks)

---

## Hoisting

**Hoisting** is JavaScript's default behavior of moving declarations (the names of your variables or functions) to the top of the current scope before the code runs.

### Simple Analogy
Imagine you are reading a book. Before you read the first page, you look at the "Table of Contents" to know what characters exist. Hoisting is JavaScript making that table of contents.

### Example

```javascript
console.log(myBot); // Result: undefined (It knows the variable exists, but not the value)
var myBot = "Gemini";
```

### Important Note
- Only `var` and function declarations are hoisted this way
- Modern keywords like `let` and `const` are hoisted too, but they stay in a "Temporal Dead Zone" (you can't use them until the line they are created on)

---

## Garbage Collector

The **Garbage Collector (GC)** is an automatic "cleaning crew." Its job is to find memory (data) that your program no longer needs and throw it away to free up space.

### Example

```javascript
let user = { name: "John" }; // Memory is used for John
user = null; // We cut the link to John
// The Garbage Collector sees John is "unreachable" and deletes him from memory
```

---

## Scope

**Scope** determines where a variable can be seen or used in your code. Think of it like "Visibility."

### Types of Scope

1. **Global Scope**: Variables defined outside any function. Everyone can see them.
2. **Function Scope**: Variables defined inside a function. Only that function can see them.
3. **Block Scope**: Variables defined inside `{ }` (like an `if` statement). Only that block can see them (only for `let` and `const`).

### Example

```javascript
let world = "Global"; // Global Scope

function myHouse() {
    let chair = "Local"; // Function Scope
    console.log(world); // Works! (World is outside)
}

// console.log(chair); // ERROR! (You can't see the chair from outside the house)
```

---

## Lexical Scope

**Lexical Scope** means that a child function has access to the variables defined in its parent's scope based on where the function was written in the code.

### Example

```javascript
function outer() {
    let outerVar = "I am outside";
    
    function inner() {
        console.log(outerVar); // Accesses parent's variable
    }
    inner();
}
```

---

## Closures

A **Closure** is when a function "remembers" its Lexical Scope even when that function is executed outside of its original scope.

### Example

```javascript
function createCounter() {
    let count = 0; // This variable is "protected"
    return function() {
        count++;
        return count;
    };
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2 (It remembered 'count'!)
```

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| **Data Privacy**: Keeps variables safe from outside interference | **Memory Usage**: Variables stay in memory longer than usual |
| **Persistent State**: Functions can "remember" things between calls | **Complexity**: Can be harder for beginners to debug |

---

## Lexical Scope vs. Closure

- **Lexical Scope** is the rule: "A function can see variables in its parent."
- **Closure** is the result: "A function still sees those variables even after the parent has finished running."

---

## Memory Leaks

A **Memory Leak** happens when the Garbage Collector wants to clean up memory, but it can't because something is still holding a reference to it, even though you don't need it anymore.

### How & Why Memory Leaks Happen

1. **Accidental Global Variables**: Using `var` inside a function without realizing it becomes global
2. **Forgotten Timers**: A `setInterval` that never gets stopped
3. **Closures**: Holding onto large objects inside a closure that isn't needed anymore

### How to Fix Memory Leaks

- Always use `let` and `const`
- Set variables to `null` when you are finished with large objects
- Clear your timers using `clearInterval()`

---

## Contributing

Feel free to contribute to this guide by submitting pull requests or opening issues for any corrections or additions.

## License

This documentation is provided as-is for educational purposes.