# 📝 JavaScript Assignment – Shallow copy, deep copy, Prototypes, Destructuring, this keyword, class, function constructor 

---

## 🟢 Easy Level

### 1. Shallow vs Deep Copy
```js
let obj = { x: 1, y: { z: 2 } };
let copy1 = { ...obj };
let copy2 = structuredClone(obj);

copy1.y.z = 50;
copy2.y.z = 100;

console.log(obj.y.z); 
// Predict the output?
```

---

### 2. Array Destructuring
```js
const nums = [5];
const [a=1, b=2, c=3] = nums;
console.log(a, b, c); 
// What will be logged?
```

---

### 3. Object Destructuring
```js
const student = { id: 1, name: "Ravi" };
const { id, name, grade="A" } = student;
console.log(id, name, grade);
// What is grade value?
```

---

### 4. String Reverse
- Implement a function that reverses `"JavaScript"` using the custom `.reverse()` method.  

---

### 5. String Methods
```js
console.log("  hello world  ".trim().toUpperCase().slice(0,5));
// What will be the output?
```

---

## 🟡 Medium Level  

### 6. Prototype Inheritance
```js
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function() {
  console.log(this.type + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak();
```

- What will be logged?  
- Add another method `eat()` in prototype that logs `"Dog is eating"` and call it.  

---

### 7. `this` Keyword
```js
const person = {
  name: "Amit",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

const greetFn = person.greet;
greetFn(); 
```

- Why does this print `undefined`?  
- Fix it using `.bind()`.  

---

### 8. Class vs Constructor
- Write a **constructor function** and a **class** for `Book` with properties: `title`, `author`.  
- Add a method `getDetails()` in both which returns `"title by author"`.  
- Create 2 objects and call the method.  

---

### 9. Array Functions
- Write code using:
  - `map()` → multiply every element in `[1,2,3,4]` by 3.  
  - `filter()` → keep only even numbers.  
  - `reduce()` → find sum of all elements.  

---

### 10. Ways to Create Objects
- Create an object representing a `Laptop` using all **5 ways** (Literal, `new Object()`, Constructor, Class, `Object.create()`).  
- Each object should have a property `brand` = `"HP"`.  

---

✅ Attempt all the questions. Later, a solution sheet will be provided for verification.  