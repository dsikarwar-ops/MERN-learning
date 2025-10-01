# 📘 JavaScript Complete Quick Guide  

---

## 1️⃣ `this` Keyword  

### 🔹 Definition  
- Refers to the context in which a function is executed.  
- Value of `this` depends on **how a function is called**, not where it’s defined.  

### 🔹 Example  
```js
const user = {
  name: "Divyansh",
  greet() {
    console.log("Hello, " + this.name);
  }
};
user.greet(); // "Hello, Divyansh"

const greetFn = user.greet;
greetFn(); // "Hello, undefined" (or global context)
```

### 🔹 Real-World Use  
- Inside classes (`this` refers to the instance).  
- Event handlers (`this` refers to the element).  

---

## 2️⃣ Call, Apply, Bind  

### 🔹 Definition  
- **call()** → calls function with given `this` and arguments (comma-separated).  
- **apply()** → like call, but arguments in an array.  
- **bind()** → returns a new function with fixed `this`.  

### 🔹 Example  
```js
function intro(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}
const person = { name: "Divyansh" };

intro.call(person, "Delhi", "India");
intro.apply(person, ["Delhi", "India"]);

const boundFn = intro.bind(person, "Delhi", "India");
boundFn(); // Works later
```

### 🔹 Real-World Use  
- Borrow methods between objects.  
- Event handlers → binding `this`.  

---

## 3️⃣ Objects  

### 🔹 Definition  
- A collection of key-value pairs (properties & methods).  

### 🔹 Example  
```js
const user = {
  name: "John",
  age: 25,
  greet() {
    console.log("Hi, " + this.name);
  }
};
user.greet();
```

### 🔹 Real-World Use  
- Store structured data → API responses (`user`, `product`, `order`).  

---

## 4️⃣ Loops  

### 🔹 Types  
- **for**  
- **while**  
- **do...while**  
- **for...of** (iterates over values)  
- **for...in** (iterates over keys)  

```js
let arr = [10, 20, 30];
for (let num of arr) console.log(num); // 10,20,30
for (let i in arr) console.log(i);     // 0,1,2
```

### 🔹 Real-World Use  
- Iterating arrays/objects for API data rendering.  

---

## 5️⃣ Object Manipulation  

### 🔹 Example  
```js
const user = { name: "John", age: 25 };

user.email = "john@example.com";       // Add property
delete user.age;                       // Delete property
Object.keys(user);                     // ["name","email"]
Object.values(user);                   // ["John","john@example.com"]
Object.entries(user);                  // [["name","John"],["email","john@example.com"]]
```

### 🔹 Real-World Use  
- Transform API response into UI state.  
- Merge configs:  
```js
const defaults = { dark: false, lang: "en" };
const custom = { lang: "fr" };
const final = { ...defaults, ...custom }; // spread operator
```

---

## 6️⃣ Array Manipulation  

### 🔹 Example  
```js
let arr = [1, 2, 3];
arr.push(4); // [1,2,3,4]
arr.pop();   // [1,2,3]
arr.shift(); // [2,3]
arr.unshift(0); // [0,2,3]
arr.splice(1,1,"X"); // [0,"X",3]
arr.slice(0,2); // [0,"X"]
```

### 🔹 Real-World Use  
- Add/remove items in a cart.  
- Update user list dynamically.  

---

## 7️⃣ Prototypes  

### 🔹 Definition  
- Every JS object has a hidden property `[[Prototype]]` that provides inheritance.  
- Functions in JS are objects, and can share methods via prototype.  

### 🔹 Example  
```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log("Hi " + this.name);
};
const p = new Person("Divyansh");
p.sayHi();
```

### 🔹 Real-World Use  
- Shared methods (saves memory).  
- Behind the scenes of classes in JS.  

---

## 8️⃣ Operators  

### 🔹 Types  
- **Arithmetic**: `+ - * / % **`  
- **Comparison**: `== != === !== > < >= <=`  
- **Logical**: `&& || !`  
- **Assignment**: `= += -= *= /=`  
- **Ternary**: `condition ? expr1 : expr2`  

### 🔹 Real-World Use  
```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
```

---

## 9️⃣ Type Coercion  

### 🔹 Definition  
- Automatic or implicit conversion of values from one type to another.  

### 🔹 Example  
```js
console.log(5 + "5"); // "55" (string coercion)
console.log("5" - 2); // 3 (number coercion)
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
```

### 🔹 Real-World Use  
- Loose equality (`==`) checks can lead to bugs → use strict (`===`).  

---

## 🔟 Conditional Operators  

### 🔹 Example  
```js
let age = 18;

if (age >= 18) console.log("Adult");
else console.log("Minor");

// Ternary
let status = age >= 18 ? "Adult" : "Minor";
```

### 🔹 Real-World Use  
- Form validations, feature flags.  

---

## 1️⃣1️⃣ Event Loop  

### 🔹 Definition  
- Mechanism that handles execution of **sync code**, **async callbacks**, and **promises**.  
- JS is single-threaded → uses call stack, Web APIs, callback queue, microtask queue.  

### 🔹 Example  
```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
```

### 🔹 Real-World Use  
- Handling async tasks (API requests, timers).  
- Prevent UI blocking in browsers.  

---

# 🎯 Summary Table  

| Concept               | Definition                                                                 | Example | Real-World Use |
|------------------------|----------------------------------------------------------------------------|---------|----------------|
| **this**              | Refers to current execution context                                        | `obj.method()` | Classes, event handlers |
| **call/apply/bind**   | Control `this` and arguments                                               | `fn.call(obj, arg)` | Borrow methods |
| **Objects**           | Key-value data structure                                                   | `{name:"A"}` | API data |
| **Loops**             | Repeat execution                                                          | `for/of/in` | Iterating data |
| **Object Manipulation** | Add, delete, merge props                                                  | `Object.keys(obj)` | Configs, APIs |
| **Array Manipulation** | Add/remove/update array elements                                           | `push, splice` | Cart items |
| **Prototypes**        | Inheritance mechanism in JS                                                | `Obj.prototype.fn` | Shared methods |
| **Operators**         | Arithmetic, comparison, logical                                            | `a+b`, `a===b` | Logic building |
| **Type Coercion**     | Auto conversion between types                                              | `"5" - 2` | Input parsing |
| **Conditional Ops**   | If-else, ternary                                                          | `age>18?"Yes":"No"` | Validation |
| **Event Loop**        | Handles async operations                                                   | `setTimeout, Promise` | API, UI responsiveness |


---
## 12️⃣ Async / Await & Promises  

### 🔹 Definition
- **Promise**: Represents the eventual result of an asynchronous operation.  
- **Async/Await**: Syntactic sugar over promises to write asynchronous code in a synchronous style.  

### 🔹 Example
```js
// Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received"), 1000);
});

fetchData.then(res => console.log(res));

// Async/Await
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getData();
```

### 🔹 Real-World Use
- API calls, database queries, file uploads.  
- Handling asynchronous events without callback hell.

---

## 13️⃣ Array Methods (Extended)  

### 🔹 reduce()
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, val) => acc + val, 0); // 10
```

### 🔹 map()
```js
let squared = arr.map(x => x ** 2); // [1, 4, 9, 16]
```

### 🔹 join()
```js
let str = ["Hello", "World"].join(" "); // "Hello World"
```

### 🔹 trim()
```js
let name = "   Divyansh   ";
console.log(name.trim()); // "Divyansh"
```

### 🔹 Real-World Use
- Reduce → calculate totals (cart, scores).  
- Map → transform API response to UI.  
- Join → display array as text.  
- Trim → clean user inputs.

---

## 14️⃣ String Methods (Extended)  

### 🔹 split()
```js
let str = "a,b,c";
let arr = str.split(","); // ["a", "b", "c"]
```

### 🔹 Access by Index
```js
let text = "Hello";
console.log(text[0]); // "H"
text[0] = "h"; // ❌ Does NOT modify string
```

### 🔹 Real-World Use
- Split → parse CSV or user input.  
- Index access → check first character or initials.

---

## 15️⃣ Primitives vs Non-Primitives  

### 🔹 Definitions
- **Primitive**: immutable data types (string, number, boolean, null, undefined, symbol, bigint).  
- **Non-Primitive**: mutable data types (object, array, function).  

### 🔹 Example
```js
let num = 5;        // Primitive
let arr = [1,2,3];  // Non-Primitive

// Primitive cannot be changed directly
num = 10; // creates new value

// Non-Primitive can be mutated
arr.push(4); // [1,2,3,4]
```

### 🔹 Mutable vs Immutable
- **Mutable**: value can change without creating a new reference (objects, arrays).  
- **Immutable**: value cannot change (primitives, strings).

### 🔹 Real-World Use
- Immutability → avoid accidental changes (React state).  
- Mutability → efficiently update collections (cart items, config objects).

---

### ✅ Summary of Additional Methods & Concepts  

| Concept | Definition | Example | Real-World Use |
|---------|-----------|---------|----------------|
| **Async/Await** | Write async code like sync | `await fetch()` | API calls, DB queries |
| **Promises** | Async result container | `new Promise()` | File uploads, async events |
| **Array reduce** | Reduce array to single value | `[1,2,3].reduce((a,b)=>a+b,0)` | Cart total, analytics |
| **Array map** | Transform array | `[1,2,3].map(x=>x*2)` | Render API data |
| **Array join** | Join array to string | `["a","b"].join(",")` | Display lists |
| **String trim** | Remove whitespace | `" hello ".trim()` | Clean inputs |
| **String split** | Convert string to array | `"a,b,c".split(",")` | CSV parsing |
| **String index** | Access character by index | `"Hello"[0]` | First letter check |
| **Primitive** | Immutable basic types | `number, string` | State safety |
| **Non-Primitive** | Mutable objects | `array, object` | Update collections |
| **Mutable** | Can change in place | `[1,2].push(3)` | Dynamic data |
| **Immutable** | Cannot change in place | `"Hello"[0]="h"` | Safe state |