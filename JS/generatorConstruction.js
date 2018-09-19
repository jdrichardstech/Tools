//GOOD REFERENCE
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

function* gen(value) {
  while (value > 0) {
    yield value;
    value--;
  }
}

let newgen = gen(4);

console.log(newgen.next());
console.log(newgen.next());
console.log(newgen.next());
console.log(newgen.next());

function* anothergen() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

let angen = anothergen();

angen.next();
angen.next('potato');

//must start with 0 dunno why
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); // 0
gen.next('pretzel'); // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
