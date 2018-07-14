/**
 * big arrow functions do not automaticallly bind a 'this' keyword
 * it reverts to the window when called within the object
 * so when defining a function in object literals, in order to bind the this use: functionName () {}
 * no colon nor any use of the word function although it is a regular function
 *
 *big arrow functions also do not bind the arguments array
 *however the new syntax grabs the arguments aa a regular function would
 */

let obj = {
  name: "Joe",
  sayHi() {
    console.log(`hi ${this.name}`);
  }
};

console.log(obj.sayHi());
