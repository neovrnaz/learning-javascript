var myMap = new Map();

myMap.set(1, ['one']);
myMap.set(2, ['two']);
myMap.set(3, ['three']);

console.log(myMap);

// for (let [key, value] of myMap) {
//   console.log(`Key is ${key}, Value is ${value}`);
// }

myMap.forEach((key) => console.log(key));

console.log('----------');
console.log(myMap);

