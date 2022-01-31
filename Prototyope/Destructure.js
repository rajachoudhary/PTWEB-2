 /*1
destructure the name and password from

{  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }*/
let {name, ...all} = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome'}

// console.log(name,all)


/*2
destructure the pincode and rename to pin

{  name: 'masai', address: {  pincode: 560095 }  }*/

// let {}
// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// let { c, d } = { c: 10, d: 20 };
// console.log(c); // 10
// console.log(d); // 20

// // Stage 4(finished) proposal
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
let {c,d} = rest
console.log("🚀 ~ file: Destructure.js ~ line 33 ~ a", a)
console.log("🚀 ~ file: Destructure.js ~ line 33 ~ d", d)

let link = "raja"
console.log('%c [ link ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', link)

