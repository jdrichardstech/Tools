function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}
function Employee(id) {
  this.id = id;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
let emp1 = new Employee("123455");
console.log(emp1);
emp1.fName = "Charles";
emp1.lName = "Rogers";
console.log(emp1);

// make notes about this.
/*
When two constructors are created and one prototype wants to take the properties of another
more abstract prototype we use Object.create to make a copy of the prototype so that
the original parent prototype will not have the ability to be changed.
After we have taken the prototype from the more abstract parent prototype
the constructor object is pointed towards the parent prototype.
Employee.prototype.constructor  === Person // true
So we must redirect the constructor to point again to the current prototype.
Employee.prototype.constructor = Employee
*/
