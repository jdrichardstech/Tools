let Dog = {
  name: "Fido",
  age: 22,
  sayHi: function() {
    return "HI " + this.name;
  },
  determineContext: function() {
    return this === Dog;
  },
  doberman: {
    sayYo: function() {
      return "yo " + this.name;
    }
  }
};
console.log(Dog.sayHi()); // HI FIDO
console.log(Dog.doberman.sayYo); //undefined this is attached to doberman
console.log(Dog.doberman.sayYo.call(Dog)); // yo FIDO

class Cat {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

Cat.prototype.sayHello = function() {
  return this.name + " you are " + this.age + " today!";
};

let myCat = new Cat("Jess", 32);
console.log(myCat.sayHello());
