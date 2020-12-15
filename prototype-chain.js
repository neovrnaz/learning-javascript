let otherProto = function () {
  this.prop1 = 456;
  this.inner = function () {
    console.log("Inner method on instance");
  };
};

otherProto.prototype.someMethod = function () {
  console.log("This is otherProto");
};

// let obj = new otherProto();
// console.log(obj.prop1);
// obj.inner();
// obj.someMethod();
// obj.toString();
// Object.getPrototypeOf(obj).someMethod();

let protoObj = {
  prop1: 456,
  someMethod: function () {
    console.log('this is someMethod');
  },
}

protoObj.__proto__.otherMethod = function () {
  console.log('This is some other method');
}

// let childObj = {};
// Object.setPrototypeOf(childObj, protoObj);
//
// console.log(childObj.prop1);

let childObj2 = Object.create(protoObj);
console.log(childObj2.prop1);
childObj2.prop1 = 777;
console.log(childObj2.prop1);
