// console.log({} == {})
// const obj = {}
// const obj1 = obj;

// console.log(obj === obj1)

// const arr = [5,4,3,2,1];
// const a = arr.sort()
// console.log(a === arr)

// const arr = [5,4,3,2,1];
// const a = arr.slice(0, 3)
// console.log(a)

// const months = ["Jan", "March", "April", "June"];
// const a = months.splice(1, 2, "Feb");

// console.log(months, a)

// {
// var a = 10;
// let b = 10;
// const c = 10;
// }

// console.log(a)
// console.log(b)
// console.log(c)

// var a = 10

// function fn(){
//     // var a
//     console.log(a) // 20, 10 global, undefined
//     var a = 20
//     return () => {
//         // lat a -> tdz
//         // console.log(a) // 20, clouser
//         let a = 30
//     }
    
// }

// console.log(a)

// fn()()

// console.log(a)

// // pass by value, pass by ref
// var x = 10
// var obj = {value: 5}

// function fn(x){
//     x = 20
// }

// function fn1(x){
//     x.value = 20
// }

// fn(x) // pass by value -> no update
// fn1(obj) // pass by ref => update

// console.log(x, obj)

// const obj = {value: 5}
// const obj1 = obj
// obj1.value = 20

// console.log(obj)
// const a = 5
// const b = Number(5)

// console.log(a === b, a == b);
