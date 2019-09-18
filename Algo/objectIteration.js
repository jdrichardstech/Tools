Given the following object below, write code to print the value then the key to the console separated by '=>':

const namesAndHobbies = {
  elie: "JavaScript",
  matt: "jogging",
  janey: "table building",
  tim: "sailing"
}

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim



function printer(obj){
  for(key in obj){
    console.log (`${key} => ${obj[key]}`)
  }
  return;
}

printer(namesAndHobbies)