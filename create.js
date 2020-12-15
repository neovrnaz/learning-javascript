let obj = {
  name: 'The dude',
};

let obj2 = Object.create(obj, {});

let obj3 = Object.create(obj2, {
  fullName: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 'George',
  },
  canBowl: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: true,
  },
})

console.log(obj3);
console.log(obj3.canBowl);
