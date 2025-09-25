// Operators, conditional operators
// +, - , *, /, %, ++|--prefix, suffix--|++, ^, !=, **
// console.log(3+3*6/6)
// console.log(10 / 6, 10 % 6)

// let a = 5
// console.log(a++, ++a)

// console.log(1 + 1, 1 + '1', 1 - "1") // 2, 11, 0
// || && ?. ?? 

// console.log(0 || 5 || 2 || 3) // true -> 5 -> return when gets any truthy value
// console.log(1 && 1 && 2 && 0) // false -> 0 -> return when gets any falsy value

// console.log(0 ?? 3) // for not defined and null values
// console.log(undefined ?? 3)  
// console.log(null ?? 3) 

// console.log(typeof null === 'object')
// console.log(null === null)
// console.log(typeof undefined === 'undefined') // undefined
// console.log(undefined === undefined) // undefined
// const a = () => {};
// console.log(typeof a === 'function') // true
// console.log(typeof a === 'object') // false

// const a = {get: () => {}};
// typeof a.get === 'function' && a.get()
// a.get?.()

// const a = { b: { c: 1 } }
// console.log(a?.b?.c?.d?.e)
// console.log(a.b.c.d.e)

// const b = 5
// b.toFixed() // prototype

// console.log(typeof 1) // number
// console.log(typeof []) // object
// console.log(typeof {}) // object
// console.log(NaN === NaN)
// console.log(isNaN(NaN))
// console.log(typeof NaN)

// Loops, array functions
// const arr = [5,4,3,2,1]
// console.log(arr.map(i => i * 5)) // [25, 20, 15, 10, 5]
// console.log(arr.forEach((i, id) => arr[id] = i * 5)) // undefined
// read about foreach
// console.log(arr) // [5,4,3,2,1]
// console.log(arr.reduce((acc, cur) => acc+cur, 5))
// console.log(arr.reduce((acc, cur) => acc+cur))
// console.log(arr.reduce((acc, cur, idx) => {
//     acc[idx] = cur
//     return acc // -> object
// }, {name: 'pablo pandey'}))


// console.log(arr.reduce((acc, cur, idx) => {
//     acc[idx] = cur
//     return acc // -> Array
// }, ['pablo pandey']))

// const arr = [5,4,3,2,1, 0,"", false, undefined, null, true, "a"];
// const res = arr.map(i => i*5).filter(i => i > 10)
// const res2 = arr.forEach(i => i*5).filter(i => i > 10)
// console.log(arr.filter(i => i)) // truthy values
// console.log(arr.filter(i => !i)) // false values

// const a = {name: 'pablo pandey'}
// a[5] = 5
// a[3] = 3
// a[4] = 4
// a[2] = 2
// a[1] = 1
// a.name = 1
// console.log(a)

// Object freez and seal
// const a = {name: "pablo Pandey"}
// Object.seal(a) // we can update existing keys, but can't add the new one
// Object.freeze(a) // freeze full object
// a.name = "dead"
// a.last = "person"
// console.log(a)

// const a = [...store.users]
// store.users.map()
