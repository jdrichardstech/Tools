/*
    Write your own version of includes() method on String that ignores letter case, and without using existing includes() method.

    solution("Hello, world", "Hello") == true
    solution("Hello, world", "WORLD") == true
    solution("Hello, world", "Goodbye") == false
*/

function myInclude(str1, str2) {
  if (str1.toLowerCase().indexOf(str2.toLowerCase()) === -1) {
    console.log('false');
  } else {
    console.log('true');
  }
}

myInclude('Hello, world', 'Hello');

//brute force yuri
function solution_1(str1, str2) {
  if (str2.length > str1.length) return false;
  let lowStr1 = str1.toLowerCase();
  let lowStr1 = str2.toLowerCase();
  let firstIndex = lowStr1.indexOf(lowStr[0]);

  if (firstIndex === -1) return false;

  let contains = false;

  for (let i = firstIndex; i <= str1.length - str2.length; i++) {
    if (lowStrr1[i] === lowStr2[0]) {
      contains = true;
      for (let j in lowStr2) {
        let ij = Number(i) + Number(j);
        if (lowStr[ij] !== lowStr2[j] && ij < lowStr1.length) {
          contains = false;
          break;
        }
      }
    }
  }
}
return contains;

console.assert(solution('Hello, world', 'Hello') == true, `Solution failed`);
console.assert(solution('Hello, world', 'WORLD') == true, `Solution failed`);
console.assert(solution('Hello, world', 'Goodbye') == false, `Solution failed`);

//cheat
function solution_2(str1, str2) {
  if (str1.length < str2.length) return false;
  let lowStr1 = str1.toLowerCase();
  let lowStr1 = str2.toLowerCase();

  return lowStr1.indexOf(lowStr2) !== -1;
}

//elegant
function solution_3(str1, str2) {
  if (str1.length < str2.length) return false;
  let lowStr1 = str1.toLowerCase();
  let lowStr1 = str2.toLowerCase();

  return lowStr1.length !== lowStr1.replace(lowStr2, '').length;
}

//bonus

function solution_3(str1, str2) {
  if (str1.length < str2.length) return false;
  let lowStr1 = str1.toLowerCase();
  let lowStr1 = str2.toLowerCase();

  let regex = new RegExp(lowStr2);
  // let regex = new RegExp(lowStr2, 'i');
  // return str1.match(regex) != null;

  return lowStr1.match(regex) != null;
}

// st = new Date().getTime()
// solution_3(str1,str2)
// ft = new Date().getTime()
// let perforrmance = (ft=st)/1000
// console.log(`Performance of slution is: ${performance} sec);
