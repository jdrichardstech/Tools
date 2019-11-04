// Callback function is a function that is passed into another function as a parameter then invoked by that other function
//https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
// Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

// Callbacks are used for:
// 1. Advanced Array Methods
// 2. Browser events ('click', 'submit')
// 3. AJAX Requests
// 4. React

/*************************/

// function sendMessage(message, callback) {
//   return callback(message);
// }

// sendMessage("Console message", console.log);
// sendMessage("Alert Message", alert);

// let answer = sendMessage("Are you sure?", confirm);

/*************************/

// function greet(name, formatter) {
//   return (document.getElementById("app").innerHTML =
//     "<h1>Hello " + formatter(name) + "</h1>");
// }

function greet(name, callback) {
  return callback();
}

function formatName(name) {
  return console.log(name.toUpperCase());
}

greet('Joe', formatName);

// INSTEAD WE MOST OFTEN USE ANONYMOUS FUNCTIONS

// function greet(name, anfn) {
//   return console.log('Hello ' + name + '!');
// }
// greet('Bob', name => {
//   return name.toUpperCase();
// });
