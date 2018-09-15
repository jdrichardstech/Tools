Currying
Informally, currying is the process of taking a function that accepts n arguments 
and turning it into n functions that each accepts a single argument. 
The arity of a function is the number of arguments that it accepts. 
A function that accepts a single argument is unary, two arguments binary, 
three arguments ternary, and n arguments is n-ary. Therefore, we can define currying
 as the process of taking an n-ary function and turning it into n unary functions. 
 Let's start with a simple example, a function that takes the dot product of two vectors. 


 https://code.tutsplus.com/tutorials/a-gentle-introduction-to-higher-order-components-in-react--cms-30094
 Currying in Functional Programming
Although the name suggests that it has something to do with an exotic dish from the popular Indian cuisine, it doesn't. Currying helps you break down a function that takes many arguments into a series of functions that take one argument at a time. Here is an example:

//Usual sum function
const sum = (a, b) => a + b
 
//Curried sum function 
const curriedSum = function (a) {
    return function (b) {
        return a+b
    }
 
//Curried sum function using arrow syntax
const curriedSum = a => b => a+b
 
curriedSum(5)(4)
//9

The function accepts just one argument and returns a function that 
takes in another argument, and this continues until all the arguments are 
satisfied. 

curriedSum
// (a) => (b) => a+b
 
curriedSum(4)
 
// (b) => 4+b
 
curriedSum(4)(5)
 
//4+5
