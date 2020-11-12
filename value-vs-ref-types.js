/* Values */
let x = 10;
let y = x;

// x and y are completely independent of each other.
x = 20
// console.log(y); // 10


/* References */
// a and b are both pointing to the same object in memory.
let a = {value: 10};
let b = a;

a.value = 20
// console.log(b); // 10

/* Primitives are copied by their value */
let num = 10;
const addToNumber = number => number++;
// console.log(addToNumber(num)); // 10

/* Objects are passed by their reference */
let obj = {value: 10};
const addToObject = obj => obj.value++;

addToObject(obj);
console.log(obj); // 11
