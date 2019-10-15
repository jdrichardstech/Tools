//So polymorphism is the ability (in programming) to present the same interface for differing underlying forms (data types).

//The classic example is the Shape class and all the classes that can inherit from it (square, circle, dodecahedron, irregular polygon, splat and so on).

//With polymorphism, each of these classes will have different underlying data. A point shape needs only two co-ordinates (assuming it's in a two-dimensional space of course). A circle needs a center and radius. A square or rectangle needs two co-ordinates for the top left and bottom right corners and (possibly) a rotation. An irregular polygon needs a series of lines.

//By making the class responsible for its code as well as its data, you can achieve polymorphism. In this example, every class would have its own Draw() function and the client code could simply do:

//shape.Draw()
//to get the correct behavior for any shape.

//This is in contrast to the old way of doing things in which the code was separate from the data, and you would have had functions such as drawSquare() and drawCircle().

var shape = function() {};
shape.prototype.draw = function() {
  return 'i am generic shape';
};
//circle
var circle = function() {};
circle.prototype = Object.create(shape.prototype);
circle.prototype.draw = function() {
  return 'i am a circle';
};
circle.prototype.constructor = circle;
//triangle
var triangle = function() {};
triangle.prototype = Object.create(shape.prototype);
triangle.prototype.draw = function(size) {
  return 'this is triangle';
};
triangle.prototype.constructor = triangle;
//printing shapes
var shapes = [new shape(), new circle(), new triangle(23)];
shapes.forEach(function(shapeList) {
  console.log(shapeList.draw());
});
