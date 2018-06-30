//this is a reseverd keyword in javascript
//it is usually determined by HOW a function is called also known as the execution context
every time a function is run, 2 special keywords are given to the function. 
  1) this
  2) arguments

'this' has four rules 
  1) global
  2) object/implicit
  3) explicit
  4) new

  in strict mode, the value of the keyword this in a function is undefined. without it the variable is available


  ****Important a keyword this is only defined, when a function is called. <source/>  
  var person = {
    firtName: 'JD',
    determineContext:this
  }

  person.determineContext /// window