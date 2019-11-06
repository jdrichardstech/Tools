//https://codeburst.io/javascript-learn-promises-f1eaa00c5461
/*
-Promises (like callbacks) allow us to wait on certain code to finish execution prior to running the next bit of code. 
-Why is this important? Think about a website that loads data from an API then processes and formats the data to display to the user. If we try to process and format our data before the API has even fetched the information, we’re either going to get an error or a blank website. By using a Promise, we can ensure that the API data isn’t processed/formatted until after our API call has succeeded.
-In JavaScript, a Promise represents the eventual result of an asynchronous operation. Think of it as a placeholder. This placeholder is essentially an object on which we can attach callbacks.
-Our Promise can have one of three states:
  a.Pending — Asynchronous operation has not completed yet
  b.Fulfilled — Operation has completed and the Promise has a value
  c.Rejected — Operation has completed with an error or failed.
  A promise is settled if it is not pending. Once a Promise has settled, it is settled for good. It cannot transition to any other state.
-Most of the time when working with Promises, you will be consuming already-created promises that have been returned from functions. However, you can also create a promise with it’s constructor.
*/

function wait(time) {
  return new Promise(function(resolve) {
    console.log(`I am going to wait ${time / 1000} seconds`);
    return setTimeout(resolve, time);
  });
}
function finshedWaiting() {
  console.log(`I have finished waiting`);
}

wait(2000).then(finshedWaiting);

//Chaining Promises
// Let's say we have a sequence of asynchronous tasks to be done one after another.
//The idea is that the result is passed through the chain of .then handlers.
//The whole thing works, because a call to promise.then returns a promise, so that we can call the next .then on it.
//When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.
// const number1 = 1;
// const number2 = 3;
// let resolveNum = (num1, num2) => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(num1 + num2), 4000);
//   });
// };

// resolveNum(number1, number2)
//   .then(result => {
//     console.log(result);
//     return result + 2;
//   })
//   .then(result => {
//     console.log(result);
//     return result + 2;
//   })
//   .then(result => {
//     console.log(result);
//     return result + 2;
//   });

/*
Error Handling
  Up until this point, we’ve only dealt with resolved promises. That’s about to change. We can use .catch() to catch all of our errors in our Promise chain. Lets look at what a .catch() might look like:
  */

// let myProm = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 2000);
// });

// myProm
//   .then(result => {
//     console.log(result);
//     return result + 2;
//   })
//   .then(result => {
//     throw new Error('FAILED HERE');
//     console.log(result);
//     return result + 2;
//   })
//   .then(result => {
//     console.log(result);
//     return result + 2;
//   })
//   .catch(e => {
//     console.log('error: ', e);
//   });

/*
-Our Promise resolves after 2 seconds with a value of 1
- This value is passed to the first .then() and alerted to the screen. 2 is added and a new value of 3 is passed to the second .then()
-A new Error is thrown. Execution stops immediately and the Promise resolves to a rejected state.
-.catch() receives our error value and logs it to the screen. Here’s what it looks like in the console:
*/

/// Let's pretend we are calling an API we are setting the data and then mapping the data to give a result

// let data = [
//   { firstName: 'Joe', lastName: 'Peters' },
//   { firstName: 'Doug', lastName: 'Lawson' },
//   { firstName: 'Sandra', lastName: 'Mathers' }
// ];

// let getDataPromise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(data), 5000);
// });

// getDataPromise
//   .then(result => {
//     console.log(`Here\'s my data from the API:\n ${JSON.stringify(result)}`);
//     return result;
//   })
//   .then(data => {
//     data.map(item => {
//       setTimeout(() => {
//         console.log(`Hello ${item.firstName} ${item.lastName}!`);
//       }, 2000);
//     });
//   });
