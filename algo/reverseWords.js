let string = 'The foxy brown dog turned red';

function reverseOnlyWords(str) {
  let arr = str.split(' ');
  let tempArr = [];
  for (i = 0; i < arr.length; i++) {
    let newArr = arr[i].split('').reverse();
    let tempString = newArr.join('');
    tempArr.push(tempString);
  }
  console.log(tempArr.join(' '));
}

function mapReverse(str) {
  let arr = str.split(' ');
  let finalArr = [];
  let newArr = arr.map(word => {
    let tempArrStr = word
      .split('')
      .reverse()
      .join('');
    return finalArr.push(tempArrStr);
  });

  return finalArr.join(' ');
}
console.log('======');
// reverseOnlyWords(string);
console.log(mapReverse(string));
