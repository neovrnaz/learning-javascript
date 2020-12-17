function Person(name, age, eyeColor) {
  this.name = name;
  this.age = age;
  this.eyecolor = eyeColor;
  this.updateAge = function () {
    return ++this.age;
  }
}

let person1 = new Person('Brian Cumin', 32, 'Brown');

person1.updateAge();
console.log(person1);
