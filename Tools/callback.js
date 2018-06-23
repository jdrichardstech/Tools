/*
Callback function is a function that is passed into another function as a parameter then invoked by that other function

Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

Callbacks are used for:
1. Advanced Array Methods
2. Browser events ('click', 'submit')
3. AJAX Requests
4. React
*/

// function callback() {
//   return console.log("I am the callback function");
// }

// function higherOrderFunction(fn) {
//   console.log("I am a Higher Order Function");
//   fn();
//   console.log("End of Higher Order function");
// }

// higherOrderFunction(fn);

/*************************/

function sendMessage(message, callback) {
  return callback(message);
}

sendMessage("Console message", console.log);
sendMessage("Alert Message", alert);

let answer = sendMessage("Are you sure?", confirm);

/*************************/

// function greet(name, formatter) {
//   return (document.getElementById("app").innerHTML =
//     "<h1>Hello " + formatter(name) + "</h1>");
// }

// function formatName(name) {
//   return name.toUpperCase();
// }

// greet("Joe", formatName);

// INSTEAD WE MOST OFTEN USE ANONYMOUS FUNCTIONS

// function greet(name, fn) {
//   return console.log("Hello " + name + "!");
// }
// greet("Bob", function(name) {
//   return name.toUpperCase();
// });
