// /*
//  A callback is simply a function that is invoked or called after
//  something has happened
// */
//
// let logCall = () => console.log("logCall was called back");
//
// // Side Note: A function name without parentheses is a reference to the function.
// // Without parentheses you're not actually calling it.
// setTimeout(logCall, 2000)
// //           |
// //        logCall is the callback and it will not execute until
// //        something else has happened (in this case 2 seconds).
//
// /*
//  In JavaScript, you can define the function at the time that you
//  pass it to the function.
//
//  This is called an anonymous function.
//  It's simply a function expression that's included in the
// */
// setTimeout(() => console.log("console.log from arrow function"), 2000)
//
// /*
//  A very common application of callbacks are event listeners. You don't want
//  something to happen until an event occurs e.g. Clicking on a button.
//
//  You pass the function to an event listener. A function is called back once
//  that event occurs.
// */
//
// let btn = document.querySelector('#btn')
// // The second argument () => console.log(...arg) is a callback
// document.addEventListener('click', () =>
//     console.log("The button was clicked")
// );
//

/*
 So far, we've been using functions that accept a callback as a parameter.
 Now I will create my own callback.
*/

let students = [
  {name: "Mary", score: 90, school: "East"},
  {name: "James", score: 100, school: "East"},
  {name: "Steve", score: 40, school: "East"},
  {name: "Gabe", score: 90, school: "West"},
  {name: "Rachel", score: 85, school: "East"},
  {name: "Rochelle", score: 95, school: "West"},
  {name: "Lynette", score: 75, school: "East"}
];

let processStudents = function(data, callback) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].school.toLowerCase() === "east") {
      if (typeof callback === "function") {
        callback(data[i]);
      }
    }
  }
}

//                                Pass in obj because callback(data[i]) is having data passed into it
//                                   |
processStudents(students, (obj) => {
  if (obj.score > 60) {
    console.log(`${obj.name} passed`)
  }
})

const determineTotal = () => {
  let total = 0,
      count = 0;
  processStudents(students, (obj) => {
    total = total + obj.score;
    count++
  })
  console.log(`Total score: ${total} - Students: ${count}`)
}
determineTotal();
