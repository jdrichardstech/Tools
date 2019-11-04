/*
- An Object with Properties and Methods
-Represents eventual completion ofr failure of an asynchronouse operation
-provides a resulting value

*/

/**
 * Important Promise Rules
 * Promises following the spec must follow a specific set of rules:
 * A promise or "thenable" is an object that supplies a standard-compliant .then() method.
 * A pending promise may transition into a fulfilled or rejected state.
 * A fulfilled or rejected promise is settled, and must not transition into any other state.
 * Once a promise is settled, it must have a value (which may be undefined). That value must not change.
 */

/**
 * The .then() method must comply with these rules:
 * Both onFulfilled() and onRejected() are optional.
 * If the arguments supplied are not functions, they must be ignored.
 * onFulfilled() will be called after the promise is fulfilled, with the promise's value as the first argument.
 * onRejected() will be called after the promise is rejected, with the reason for rejection as the first argument. The reason may be any valid JavaScript value, but because rejections are essentially synonymous with exceptions, I recommend using Error objects.
 * Neither onFulfilled() nor onRejected() may be called more than once.
 * .then() may be called many times on the same promise. In other words, a promise can be used to aggregate callbacks.
 * .then() must return a new promise, promise2.
 * If onFulfilled() or onRejected() return a value x, and x is a promise, promise2 will lock in with (assume the same state and value as) x. Otherwise, promise2 will be fulfilled with the value of x.
 * If either onFulfilled or onRejected throws an exception e, promise2 must be rejected with e as the reason.
 * If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1.
 * If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1.
 */

//  promises.js

/**
 *  A promise is an object that represents a task that will be completed in the future
 *
 */
let json = [
  {
    name: 'Joe',
    car: 'Honda',
    dog: 'golden retriever'
  },
  {
    name: 'Peter',
    car: 'Porsche',
    dog: 'german shepard'
  }
];

var p1 = new Promise(function(resolve, reject) {
  resolve(json);
});

p1.then(arr => {
  arr.map(element =>
    console.log(`${element.name} has a ${element.car} and a ${element.dog}. `)
  );
}).catch(err => console.log(err));
