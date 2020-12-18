function counter() {
  var count = 0;
  var increment = function () {
    count++;
  };
  increment();
  increment();
  return count;
}

var x = counter();

console.log(x);
