/**Object Oriented programming is a paradigm based around the idea of objects
and blueprints that create objects which we call classes which can be thought of like a blueprint
We call objects created from classes, instances. We try to make classes abstract and modular
to make them re-usable. Javascript does not have classes built -in but we mimic
classes in javascript using functions and objects. 
 */

// constructor function  Capitalization of Name is a convention
 function House(bedrooms, bathrooms, numSqft){
  this.bedrooms =bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
 }

 // no you need the new keyword to invoke the function

 let firstHouse = new House();

 //1)creates an empty object
 //2)sets the keyword 'this' to the empty object
 //3)it adds an implicit 'return this' to the end of the function
 /* 4)creates a link(which we can access as __proto__ or dunder proto) between
      the object created and the prototype property of the constructor function
*//
    function Dog(name, age){
      this.name = name;
      this.age = age;
      bark = function(){
        console.log("Bark " + name + "!")
      }
    }

    let rusty = ('Rusty',3)
    rusty.bark();

    // to avoid repetition between two similar constructor functions, use call or apply
    // grab the arguments from the previous constructor


    function Car(make, model, year){
      this.make = make;
      this.model = model;
      this.year = year;
      this.numWheels = 4
    }

    function Motorcycle(make, modle, year){
      Car.call(this, make, model, year)
      // or Car.apply(this, [make, model, year])
      // or Car.apply(this, arguments)
      // arguments is not technically and array, but it is array like object
    }


    //Inheritance is the method of passing methods and properties from one class to another