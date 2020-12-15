class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var userOne = new User('john@gmail.com', 'john');
console.dir(userOne);
