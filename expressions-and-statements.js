/*======== Expressions ======== */
/*
 * An expression is any valid unit of code that resolves to a value.
 *
 * A variable is also an expression that evaluates to the
 * value that's been assigned to it.
 */

//* Arithmetic Expressions
10;
10 + 13;

//* String Expressions
'hello';
'hello' + 'world';

//* Logical Expressions
10 > 9;
10 < 20;
true;
a===20 && b===30;

//* Primary Expressions
'hello world'; // A string literal
1.23; // A numeric literal
true;
this;

//* Left-hand-side Expressions
i = 10;
total = 0;
var obj = {};
obj.x = 20;
array[0] = 20;
array[1] = 'hello';

//* Assignment Expressions
average = 55;

//* Expressions with side effects
sum = 20;
sum++;

//* Misc Expression Examples:
// Expressions resolve to a value

//  Is an expression because it returns something
//   |
getAnswer();

2 + 5;
5;


/*======== Statements ======== */
/*
* A statement is an instruction to perform a specific action.
* This can include:
* Creating a variable or function
* Looping through an array of elements
* Evaluating code based on a specific condition
*
* Javascript programs are a sequence of statements
*/

//* Declaration Statements
// Creates a variable or function
var sum;
var average;

//     Statement
//     /      \
      var total = 0;
//         \      /
//        Expression

// Function declaration statement
function greet() {...}

//* Expression Statements
var a = (b = 1);
//       \   /
//     Assignment Expression

//* Conditional Statement
if (expression) {
      statement 1
} else {
      statement 2
}

// Loops and Jumps
do...while
for () {}
break
continue
return
throw

//* Misc Statement Examples:
// A statement is an instruction

//    These are statements because they control actions but don't become values
//     /
if () {...}
while() {...}
for () {...}


/*======== Notes ======== */
// You cannot put statements where expressions expect a value
//e.g.
console.log(const x); // error
let b = if () {...}; // error
