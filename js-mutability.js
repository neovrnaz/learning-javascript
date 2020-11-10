// const means that you can't reassign the variable. It doesn't
// control the behavior of the object.
// const obj = {
//   number: 4
// };
//
// const obj1 = obj;
// console.log(obj1);
// obj.number++;
// console.log(obj1);
//
// const obj2 = {
//   number: 4
// };

let newObj = {
  total: 65,
  increment: 1
};

const cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj))
};

const incrementTotal = function(obj, val) {
  let newObj = cloneObject(obj);
  newObj.increment = val;
  return function() {
    console.log(newObj.total);
    newObj.total = newObj.total + newObj.increment;
    console.log(newObj.total)
  };
};

const incBy1 = incrementTotal(newObj, 1);
const incBy2 = incrementTotal(newObj, 2);
