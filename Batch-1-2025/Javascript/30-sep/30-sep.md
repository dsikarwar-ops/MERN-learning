# 🚀 JavaScript Async & Event Loop -- Assignment

This assignment will help you understand how the **JavaScript Event
Loop** works and how asynchronous tasks like `setTimeout`, `Promise`,
and `fetch()` are handled. You will also build a small project with
**loading states** and **skeleton UI**.

------------------------------------------------------------------------

## 📌 Part 1: Event Loop & Execution Order

1.  Predict the output of the following code **before running it**:

``` js
console.log('1');

setTimeout(() => console.log('timeout 1'), 0);

Promise.resolve().then(() => console.log('promise 1'));

console.log('2');

setTimeout(() => console.log('timeout 2'), 0);

Promise.resolve().then(() => console.log('promise 2'));

console.log('3');
```

-   Question: Why do promises run before `setTimeout`?

------------------------------------------------------------------------

2.  Analyze this code and explain the exact order of execution:

``` js
async function test() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}
test();
console.log('C');
```

-   Question: What happens inside the **microtask queue** when `await`
    is used?

------------------------------------------------------------------------

## 📌 Part 2: Timers & Blocking

1.  Run this code and measure the delay:

``` js
console.time('timer');
setTimeout(() => {
  console.timeEnd('timer');
}, 2000);

for (let i = 0; i < 1e9; i++) {} // heavy loop
```

-   Question: Why does the `setTimeout` callback run **later than 2s**?

------------------------------------------------------------------------

## 📌 Part 3: Callbacks vs Promises vs Async/Await

1.  Write the same logic in 3 different ways:
    -   Using `setTimeout(callback)`
    -   Using `Promise.then`
    -   Using `async/await`

Logic: Wait for 2 seconds, then print `"Done!"`.

------------------------------------------------------------------------

## 📌 Part 4: Mini Project -- Fetch with Loading & Skeleton

👉 Create an `index.html` file with: - A button `"Load Users"`. - A
container `<div id="users"></div>`.

When button is clicked: 1. Show **skeleton cards** (gray boxes). 2.
Fetch data from <https://jsonplaceholder.typicode.com/users>. 3. Replace
skeletons with actual user data (name, email, phone). 4. If fetch fails,
show an error message `"Failed to load data"`.

**Extra:** - Add a `"Reload"` button to refetch users. - Show a
`"Loading..."` text before skeletons appear.

------------------------------------------------------------------------

## 📌 Part 5: Debugging

Given this snippet, fix it so that it prints in the correct order:\
Expected: `1 → 2 → 3 → 4`

``` js
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
```

------------------------------------------------------------------------

## ✅ Deliverables

-   Write predictions **before running** each snippet.
-   Submit:
    -   One `index.html` + `script.js` for the mini-project.
    -   A `.md` or `.txt` file with answers/explanations.

------------------------------------------------------------------------

💡 **Hint:** Use [latentflip.com/loupe](http://latentflip.com/loupe) to
visualize the Event Loop.