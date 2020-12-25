let object1 = {
  num: 1,
  string: 'hello',
};

function objectHasOwnPropCheck(obj, value) {
  return obj.hasOwnProperty.call(obj, value);
}

console.log(objectHasOwnPropCheck(object1, 'string'));

