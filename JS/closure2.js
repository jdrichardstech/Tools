let outer = () => {
  let instructors = ['Bob', 'Jill'];
  return {
    getInstructor() {
      return [...instructors];
    },
    addInstructor(name) {
      instructors.push(name);
    }
  };
};

let ins = outer();

console.log(ins.getInstructor());
console.log(ins.addInstructor('Louis'));
console.log(ins.getInstructor());
console.log(ins.getInstructor().pop());
console.log(ins.getInstructor());

// function counter(){
//   let count = 0
//   return function innerCount(){
//     return count++
//   }
// }

let counter = () => {
  let count = 0;
  return () => count++;
};

let c = counter();
let d = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(d());
