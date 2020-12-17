function greet(msg) {
  return (name) => {
    console.log(msg, name);
  };
}
let english = greet('Hello');
english('Georeg');
