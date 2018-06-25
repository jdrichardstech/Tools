// closure is a function that makes use of variables that were defined in outer functons that have been returned

//closure can be used to create private variables

function outer() {
  let str = "This is a closure";
  return function inner() {
    return str + " example";
  };
}

console.log(outer()); // return Function inner
console.log(outer()()); // returns "This is a closure example"
//when outer is invoked. you see there is a function called inner but you do not see the variables.

//when inner is invoked outer()() the variable from outer is available to the inner function however and you then can see the result but  not the variable in the outer function

//inner function doesn't have to have a name. you can pass argument to the inner function

// Another example and use case:

// function counter(){
//   let count = 0;
//   return function(){
//     count++
//     return count;
//   }
// }

// let c1 = counter()

// console.log(c1()) // 1
// console.log(c1()) // 2
// let c2 = counter();
// console.log(c2()) //1
// console.log(c1()); //3

// console.log(counter()()) // 1
// console.log(counter()()) // 1

function classRoom() {
  let instructors = ["Jeff", "Carlos", "Brian", "Pak"];

  return {
    getInstructors: function() {
      return instructors.slice();
    },
    addInstructors: function(instructor) {
      instructors.push(instructor);
      return instructors.slice();
    }
  };
}

//returning a copy of the array which is what you learn in react prevents the user from mutating the array and removing the data

let nextClassroom = classRoom();
console.log(nextClassroom.addInstructors("JD")); //adds JD to instructors array
console.log(nextClassroom.getInstructors()); //["Jeff", "Carlos", "Brian", "Pak","JD"]
console.log(nextClassroom.getInstructors().pop()); //"JD"
console.log(nextClassroom.getInstructors()); //["Jeff", "Carlos", "Brian", "Pak","JD"] no mutation
