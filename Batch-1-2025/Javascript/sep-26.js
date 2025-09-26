// JavaScript Notes – Today's Topics

// 1. Shallow Copy vs Deep Copy
let obj1 = { a: 1, b: { c: 2 } };

// Shallow copy
let shallow = { ...obj1 };
shallow.b.c = 100;
console.log("Shallow Copy:", obj1.b.c); // 100

// Deep copy
let deep = structuredClone(obj1);
deep.b.c = 200;
console.log("Deep Copy:", obj1.b.c); // 2


// 2. Destructuring (Array & Object)
// Array Destructuring
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30

// Default Values in Destructuring
const [x=5, y=10, z=15] = [1, 2];
console.log(x, y, z); // 1 2 15

// Multilevel Destructuring (Nested)
const user = { name: "Alex", address: { city: "Delhi", pin: 110001 } };
const { name, address: { city, pin } } = user;
console.log(name, city, pin); // Alex Delhi 110001

// Object Destructuring with Defaults
const student = { roll: 101 };
const { roll, grade = "A" } = student;
console.log(roll, grade); // 101 A


// 3. Prototypes
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};
const p1 = new Person("John");
p1.sayHi();


// 4.String Reverse
String.prototype.reverse = function() {
  return this.split("").reverse("").join("");
};

const text = 'abcdefg'
console.log(text.reverse())


// 5. String & Array Functions
console.log("hello".toUpperCase()); // HELLO
console.log("  hi  ".trim());       // "hi"
console.log(["a","b","c"].map(x => x.toUpperCase())); // ["A","B","C"]


// 6. Functions vs Arrow Functions
function add(a, b) {
  return a + b;
}
const addArrow = (a, b) => a + b;
console.log(add(2,3), addArrow(2,3)); // 5 5


// 7. this keyword
const obj = {
  name: "Sam",
  greet: function () {
    console.log(this.name);
  }
};
obj.greet(); // Sam
const fn = obj.greet;
fn(); // undefined (in strict mode)


// 8. Class & Function Constructor
function Car(model) {
  this.model = model;
}
Car.prototype.drive = function() {
  console.log(this.model + " driving...");
};
let car1 = new Car("BMW");
car1.drive();

class CarClass {
  constructor(model) {
    this.model = model;
  }
  drive() {
    console.log(this.model + " driving...");
  }
}
let car2 = new CarClass("Audi");
car2.drive();


// 9. Ways to Create Objects
let obj1Literal = { a: 10 };
let obj2New = new Object();
obj2New.a = 20;
function Human(name) { this.name = name; }
let h1 = new Human("John");
class HumanClass { constructor(name) { this.name = name; } }
let h2 = new HumanClass("Alex");
let proto = { greet: function(){ console.log("Hello"); } };
let obj3 = Object.create(proto);