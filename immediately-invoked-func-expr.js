// let product = function() {
//   console.log(5 * 5);
// };
// What if instead you wanted to call this function immediately instead
// of using "product()"?

// product()

// You could put parentheses immediately after the function like this...
// let product =
(function() {
  console.log(5 * 5);
}());
// IIFE's can't be funciton expressions or function declarations
