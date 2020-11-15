// Node applications are asynchronous by default
const fetch = require("node-fetch");

let a = 1;
let b = 2;

// This will come after the "Synchronous" code
setTimeout(() => console.log("Asynchronous"), 100);
setTimeout(() => console.log("--------------"), 100);

console.log("Synchronous");
console.log("--------------");
console.log(a);
console.log(b);

