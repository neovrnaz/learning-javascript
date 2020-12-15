var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  }
};

var george = new  User("george", 3);

console.log(george.firstName);

var norman = new User("norman", 3);
console.log(norman)
