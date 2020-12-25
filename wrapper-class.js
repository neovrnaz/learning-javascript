function add(x, y) {
  return x + y;
}

const Logger = function (func) {
  return function (x, y) {
    console.log(`The arguments are ${x} and ${y}`);
  };
};


const Add = Logger(add);

console.log(Add(4, 5));
