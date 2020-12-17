let c1 = {
  x: 5,
  y: 10,
}

let c2 = {
  x: 55,
  y: 230,
}

function printCoordinates() {
  console.log(this);
  console.log(this.x + ', ' + this.y);
}
//
// let c1_func = printCoordinates.bind(c1);
// let c2_func = printCoordinates.bind(c2);
//
// c1_func();
// c2_func();
printCoordinates();

console.dir(window);
