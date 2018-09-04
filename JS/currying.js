Currying
Informally, currying is the process of taking a function that accepts n arguments 
and turning it into n functions that each accepts a single argument. 
The arity of a function is the number of arguments that it accepts. 
A function that accepts a single argument is unary, two arguments binary, 
three arguments ternary, and n arguments is n-ary. Therefore, we can define currying
 as the process of taking an n-ary function and turning it into n unary functions. 
 Let's start with a simple example, a function that takes the dot product of two vectors. 
 Recall from linear algebra that the dot product of two vectors 
 [a, b, c] and [x, y, z] is equal to ax + by + cz.


 function dot(vector1, vector2) {
  return vector1.reduce((sum, element, index) => sum += element * vector2[index], 0);
}

const v1 = [1, 3, -5];
const v2 = [4, -2, -1];

console.log(dot(v1, v2)); // 1(4) + 3(-2) + (-5)(-1) = 4 - 6 + 5 = 3