function increment(i) {
  return i + 1;
}

let add = (function (i) {
  console.log('Hello');
  return i + 1;
})(3);
