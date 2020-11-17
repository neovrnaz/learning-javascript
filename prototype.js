/*
  Prototypes are the mechanism by which JavaScript objects inherit features
  from one to another.
*/

function Person(first, last, age, eyecolor, interests, email) {
  this.name = {
    'first': first,
    'last': last
  };
  this.age = age;
  this.eyecolor = eyecolor;
  this.email = email;
  this.online = false;
  this.showEyeColor = () => console.log(`Eye color:  ${this.eyecolor}`)
}

var person1 = new Person("Richard", "Tea", 32, "blue", ['music', 'skiing']);
var person2 = new Person("Norman", "Gordon", 28, "green");

console.log(person1);
person2.showEyeColor();

// Access prototype property
// Logging an instance of the object
// Only the constructor function (Person), that has that prototype property.
console.log(`Person.prototype: ${Person.prototype}`);

// Attach methods to the prototype
Person.prototype.login = function() {
   this.online = true;
   console.log(`Logged in?: ${this.online}`)
}

Person.prototype.logout = function() {
   this.online = false;
   console.log(`Logged in?: ${this.online}`)
}

// Each object has a ".getName" function that returns the name of the constructor
Object.prototype.getName = function() {
  var funcNameRegex = /function (.{1,})\(/;
  var results = (funcNameRegex).exec((this).constructor.toString());
  return (results && results.length > 1) ? results[1] : "";
};
