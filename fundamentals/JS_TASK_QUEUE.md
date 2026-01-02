# JavaScript Event Loop & Task Queues Guide

A comprehensive guide to understanding the JavaScript Event Loop, priority rules, microtasks vs macrotasks, and execution order.

---

## Table of Contents

- [The Priority Rule](#the-priority-rule)
- [Which Task Goes Where?](#which-task-goes-where)
- [The "Interview" Example](#the-interview-example)
- [Why Does This Matter?](#why-does-this-matter)

---

## The Priority Rule

The most important thing to remember is the **Priority**:

1. **The Call Stack**: Executes your immediate code (Synchronous)

2. **Microtask Queue**: The VIP line. The manager finishes everything in this line before looking anywhere else

3. **Task Queue**: The regular line. The manager only takes one person from this line, then goes back to check the VIP line again

---

## Which Task Goes Where?

It is vital to know which "API" or "Keyword" sends a task to which line.

### The Task Queue (Macrotasks)

These are tasks that are considered "heavy" or "external." They are usually managed by the browser or the environment.

- `setTimeout()`
- `setInterval()`
- DOM Events (like a user clicking a button)
- I/O Operations (reading a file)

### The Microtask Queue

These are tasks that usually come from within the JavaScript language itself and need to happen as soon as the current code finishes.

- Promises (`.then`, `.catch`, `.finally`)
- `async/await` (the part after the `await`)
- `queueMicrotask()` (a way to manually put something in the VIP line)
- MutationObserver (watching for changes in the HTML)

---

## The "Interview" Example

This is a classic question. Looking at this code, in what order will the numbers print?

```javascript
console.log("1: Start"); // Synchronous

setTimeout(() => {
    console.log("2: Timeout"); // Task Queue
}, 0);

Promise.resolve().then(() => {
    console.log("3: Promise"); // Microtask Queue
});

console.log("4: End"); // Synchronous
```

### The Result

1. `1: Start` (Prints immediately)
2. `4: End` (Prints immediately)
3. `3: Promise` (The VIP line is checked first!)
4. `2: Timeout` (The regular line is checked last)

### Execution Order Breakdown

| Step | What Happens | Output |
|------|-------------|--------|
| 1 | Call Stack executes `console.log("1: Start")` | `1: Start` |
| 2 | `setTimeout` is sent to Task Queue (Macrotask) | - |
| 3 | Promise is sent to Microtask Queue | - |
| 4 | Call Stack executes `console.log("4: End")` | `4: End` |
| 5 | Call Stack is empty, check Microtask Queue | `3: Promise` |
| 6 | Microtask Queue is empty, check Task Queue | `2: Timeout` |

---

## Why Does This Matter?

Imagine you have a `Promise` that creates another `Promise`, which creates another one. Because JavaScript finishes the **entire Microtask Queue** before moving to the **Task Queue**, you could actually "starve" the Task Queue.

### The Risk

If the Microtask Queue never becomes empty, the browser will never run your `setTimeout` or even update the screen (rendering), making the website feel frozen.

### Master's Secret

> **Microtasks** are for logic that needs to happen immediately after the current script, while **Tasks** are for things that can wait for the browser to catch its breath.

---

## Quick Reference Table

| Queue Type | Priority | Use Case | Examples |
|------------|----------|----------|----------|
| **Call Stack** | 1 (Highest) | Immediate synchronous code | `console.log()`, function calls |
| **Microtask Queue** | 2 (VIP) | Logic needed right after current script | Promises, `async/await`, `queueMicrotask()` |
| **Task Queue** | 3 (Regular) | Heavy/external operations that can wait | `setTimeout()`, DOM events, I/O |

---

## Contributing

Feel free to contribute to this guide by submitting pull requests or opening issues for any corrections or additions.

## License

This documentation is provided as-is for educational purposes.