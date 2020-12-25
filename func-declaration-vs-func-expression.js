/*================ Function Declarations vs Function Expressions ================*/
/*
 * Javascript has two different ways that you can define a function.
 * 1. Function Declaration
 * 2. Function Expression
 */

// 1. Function declarations

console.log(declaration());
declaration();

function declaration() {
  console.log('I come from a function declaration');
}

// Function expressions are not hoisted
console.log(expression());
expression();

let expression = function () {
  console.log('I come from a function expression');
};
