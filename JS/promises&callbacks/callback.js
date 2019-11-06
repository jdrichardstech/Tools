//https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

// A callback is a function that is to be executed after another function has finished executing. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

function func2(func) {
  setTimeout(params => {
    console.log('Promise 2');
  }, 5000);
}

function func3() {
  setTimeout(params => {
    console.log('Promise 3');
  }, 3000);
}

function func1(func) {
  setTimeout(params => {
    console.log('Promise 1');
  }, 2000);
}

// func1(func2(func3()));

// clearer maybe

function working(subject, callback) {
  console.log(`I'm practicing my ${subject} now`);
  callback(subject);
}

function finshed(topic) {
  setTimeout(() => {
    console.log(`I have finished my ${topic} finally!`);
  }, 3000);
}

working('node', finshed);
//---------

// let places = [
//   { name: "Joe's Pizza", address: '285 Madison' },
//   { name: 'Dunkin Donuts', address: '299 42nd St' }
// ];

// const murrays = { name: "Murray's Steakhouse", address: '1222 Lexington Ave' };

// function httpPlaces(array) {
//   setTimeout(() => {
//     array.forEach(item => {
//       console.log(item);
//     });
//   }, 2000);
// }

// function addPlace(object, array) {
//   setTimeout(() => {
//     array.push(object);
//     // callback(array);
//   }, 4000);
// }

// addPlace(murrays, places);
// httpPlaces(places);
