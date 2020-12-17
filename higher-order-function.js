const returnAFunction = function () {
  return function () {
    console.log('Hello from inside a function');
  };
};

returnAFunction()();
