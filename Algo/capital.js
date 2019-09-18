

function cap(str) {
  let tempStr = '';
  let tempStr2 = '';
  for(let i = 0; i < str.length; i++) {
    if(i % 2 === 0) {
      tempStr += str[i].toUpperCase();
      tempStr2 += str[i];
    } else {
      tempStr += str[i];
      tempStr2 += str[i].toUpperCase();
  }
 }
  console.log([tempStr, tempStr2]) 
 }
 cap('abcdef');