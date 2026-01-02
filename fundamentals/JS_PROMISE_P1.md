# JavaScript Promises Guide

A comprehensive guide to understanding JavaScript Promises, their states, mutability, creation, chaining, and error handling.

---

## Table of Contents

- [What is a Promise & Why is it Required?](#what-is-a-promise--why-is-it-required)
- [The States of a Promise](#the-states-of-a-promise)
- [Mutability of a Promise](#mutability-of-a-promise)
- [How to Create a Promise](#how-to-create-a-promise)
- [Promise Chaining](#promise-chaining)
- [How to Handle Errors](#how-to-handle-errors)
- [Summary Table](#summary-table)

---

## What is a Promise & Why is it Required?

In the old days, we used **"Callbacks"** (as we discussed before). But callbacks led to **Callback Hell** (nested, messy code) and **Inversion of Control** (losing track of who is running your code).

### Promises are required because:

- **They clean up code**: They turn nested "pyramids" into flat, readable lists
- **They provide control**: You decide what happens next, not the third-party library
- **Consistency**: They have a standard way to handle both success and failure

---

## The States of a Promise

A Promise is always in one of three states:

1. **Pending**: The initial state (The pizza is still in the oven)
2. **Fulfilled (Resolved)**: The task finished successfully (You have the pizza)
3. **Rejected**: The task failed (The oven broke)

### State Diagram

```
┌─────────┐
│ Pending │
└────┬────┘
     │
     ├──────────────┬──────────────┐
     │              │              │
     ▼              ▼              ▼
┌─────────┐    ┌──────────┐   ┌──────────┐
│ Initial │───▶│ Fulfilled│   │ Rejected │
└─────────┘    └──────────┘   └──────────┘
```

---

## Mutability of a Promise

This is a **key interview point**: Promises are **Immutable**.

Once a Promise is "Settled" (either Resolved or Rejected), its value **cannot change**. If you try to resolve a promise a second time with a different value, JavaScript will simply ignore it. This makes your code predictable and safe.

### Key Takeaway

> Once settled, a Promise's state and value are locked forever.

---

## How to Create a Promise

We use the `new Promise` constructor. It takes a function with two "switches": `resolve` and `reject`.

### Example

```javascript
const myPizzaPromise = new Promise((resolve, reject) => {
    let ovenWorking = true;

    if (ovenWorking) {
        resolve("🍕 Here is your pizza!"); // Success!
    } else {
        reject("❌ Sorry, the oven is broken."); // Failure!
    }
});
```

---

## Promise Chaining

**Promise Chaining** is the ability to link multiple tasks together one after another. Each `.then()` returns a new promise, allowing the data to flow down the chain like an assembly line.

### Example

```javascript
// Step 1: Get User -> Step 2: Get Orders -> Step 3: Get Total
getUser(1)
    .then(user => getOrders(user.id))
    .then(orders => calculateTotal(orders))
    .then(total => console.log("Total is:", total))
    .catch(error => console.log("Something went wrong:", error));
```

### Benefits of Chaining

- Avoids nested callbacks (no callback hell)
- Maintains readable, linear flow
- Each step can transform data for the next step
- Single error handler can catch errors from any step

---

## How to Handle Errors

There are two main ways to catch a "Rejected" promise:

### 1. Using `.catch()` (Best Practice)

This sits at the bottom of your chain and catches an error from any step above it.

```javascript
fetchData()
    .then(data => {
        // Do something with data
    })
    .catch(err => {
        console.error("Caught the error here:", err);
    });
```

### 2. The Second Argument of `.then()`

You can pass a second function to `.then()`, but it only catches errors from the step immediately before it.

```javascript
fetchData()
    .then(
        data => {
            // Success handler
        },
        err => {
            // Error handler (only for this step)
        }
    );
```

### Why `.catch()` is Better

- Catches errors from **any** step in the chain
- More readable and maintainable
- Follows the single responsibility principle
- Easier to add `.finally()` for cleanup

---

## Summary Table

| Feature | Description |
|---------|-------------|
| **Status** | Pending, Fulfilled, or Rejected |
| **Immutability** | Once settled, it never changes |
| **Chaining** | Uses `.then()` to avoid nesting |
| **Error Handling** | Uses `.catch()` to handle failures gracefully |

---

## Promise API Quick Reference

| Method | Purpose | Example |
|--------|---------|---------|
| `.then()` | Handle fulfilled promise | `promise.then(value => {...})` |
| `.catch()` | Handle rejected promise | `promise.catch(error => {...})` |
| `.finally()` | Run code after promise settles (success or failure) | `promise.finally(() => {...})` |
| `Promise.all()` | Wait for all promises to resolve | `Promise.all([p1, p2, p3])` |
| `Promise.race()` | Wait for first promise to settle | `Promise.race([p1, p2, p3])` |
| `Promise.resolve()` | Create a resolved promise | `Promise.resolve(value)` |
| `Promise.reject()` | Create a rejected promise | `Promise.reject(error)` |

---

## Contributing

Feel free to contribute to this guide by submitting pull requests or opening issues for any corrections or additions.

## License

This documentation is provided as-is for educational purposes.