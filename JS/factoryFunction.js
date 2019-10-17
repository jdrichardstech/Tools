// @ref https://www.sitepoint.com/factory-functions-javascript/

/*When a function returns an object, we call it a factory function.
Each time we call this factory, it will return a new instance of the jelly object.

It’s important to note that we don’t have to prefix our factory names with create but it can make the intent of the function clearer to others. The same is true with the type property but often it can help us differentiate between the objects flowing through our programs.
*/
function createJelly() {
  return {
    type: 'jelly',
    colour: 'red'
    scoops: 3
  };
}

//Like all functions, we can define our factory with parameters which change the shape of the returned object
function createIceCream(flavour='Vanilla') {
  return {
    type: 'icecream',
    scoops: 3,
    flavour
  }
}

/*Composable Factory Functions define one factory in terms of another helps us break complex factories into smaller, reusable fragments. For example, we can create a dessert factory which is defined in terms of the jelly and ice cream factories from before.*/

function createDessert() {
  return {
    type: 'dessert',
    bowl: [
      createJelly(),
      createIceCream()
    ]
  };
}