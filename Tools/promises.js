//  promises.js

/**
 *  A promise is an object that represents a task that will be completed in the future
 *
 */

var p1 = new Promise(function(resolve, reject) {
  resolve([1, 2, 3, 4]);
});

p1.then(function(arr) {
  arr.map((element, idx) =>
    console.log("here is value" + idx + ": " + element)
  );
}).catch();
