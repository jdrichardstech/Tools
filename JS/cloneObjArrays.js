let obj = {
  priority: 1,
  name: 'Joe',
  age: 25,
  greeting() {
    return `Hello ${this.name}`;
  },
  a: {
    b: 3
  }
};

let obj2 = { bummer: 'sucks' };

let arr = ['will', ['john', 'jack'], 'steve', 'april'];

//Arrays

let copy1 = arr.slice();
console.log(copy1);
let copy2 = [...arr];
console.log(copy2);
let copy3 = [].concat(arr);
console.log(copy3);
let copy4 = Object.values(arr);
console.log(copy4);
let copy5 = JSON.parse(JSON.stringify(arr));
console.log(copy5);
let copy6 = arr.map(item => item);
console.log(copy6);
let copy7 = Object.assign([], arr);
console.log(copy7);
let copy8 = Array.of(...arr);
console.log(copy8);

//Objects
let newObj1 = JSON.parse(JSON.stringify(obj));
console.log('1', newObj1);
let newObj2 = { ...obj };
console.log('2', newObj2);
let newObj3 = Object.assign({}, obj);
console.log('3', newObj3);

console.log(Number('a'.charCodeAt()));
console.log(Number('z'.charCodeAt()));
let str = 'Hello there';
let splitString = str.split(' ');

console.log('string', splitString[0].toLowerCase().charCodeAt() - 96);
