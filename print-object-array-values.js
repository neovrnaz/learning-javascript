const objects = [
  {
    num1: 1,
    num2: 2,
  },
  {
    string1: 'string1',
    string2: 'string2',
  },
];

function printObjectsValues() {
  let valuesArray = [];
  for (let i = 0; i < objects.length; i++) {
    const currentObject = objects[i];
    for (let property in currentObject) {
      if (currentObject.hasOwnProperty.call(currentObject, property)) {
        valuesArray.push(currentObject[property]);
      }
    }
  }
  return valuesArray;
}
