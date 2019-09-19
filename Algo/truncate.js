// ​
// Create a function that takes a string (the string to truncate) and a number (the maximum length of the truncated string) as arguments and returns the truncated string at the given length.
// ​
// Examples
// ​
// truncate("Lorem ipsum dolor sit amet.", 11) ➞ "Lorem ipsum"

// truncate("Lorem ipsum dolor sit amet.", 16) ➞ "Lorem ipsum"
// ​
// truncate("Lorem ipsum dolor sit amet.", 17) ➞ "Lorem ipsum dolor"

// ** To "truncate" means "to shorten by cutting off the top or end".
// ​
// ** If a word is truncated in the middle, discard it in the output (see 2nd example above).
// ​
// ​
// ​
// */
function trunc(str, num) {
  let newString = str.substring(0, num);
  let finalString = '';
  if (str[num] === ' ') {
    finalString += newString;
    //  console.log('yes')
  } else {
    //  console.log('no')
    let index = newString.lastIndexOf(' ');
    finalString += newString.substring(0, index);
  }
  console.log(finalString);

  return finalString;
}

let word = 'Lorem ipsum dolor sit amet.';
trunc('Lorem ipsum dolor sit amet.', 17);
