// Object destructuring takes an object or an array and converts it
// to smaller objects or smaller elements variables
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

const [a, b, ...rest] = alphabet;

const newArray = [...alphabet, ...numbers];

console.log(newArray);
