// A callback is simply a function that is invoked or called after
// something has happened

let logCall = () => console.log("logCall was called back");

// Side Note: A function name without parentheses is a reference to the function.
// Without parentheses you're not actually calling it.
setTimeout(logCall, 2000)
//           |
//        logCall is the callback and it will not execute until
//        something else has happened (in this case 2 seconds).

// In JavaScript, you can define the function at the time that you
// pass it to the function. This is called an anonymous function.
// It's simply a function expression that's included in the
// setTimeout function
setTimeout(() => console.log("console.log from arrow function"), 2000)
