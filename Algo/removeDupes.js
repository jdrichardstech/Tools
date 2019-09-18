// Remove Dupes
// Instructions
// Write a function that takes in a string and returns a new string. The new string should be the same as the original with every duplicate character removed.

// 'abcd' -> 'abcd'
// 'aabbccdd' -> 'abcd'
// 'abcddbca' -> 'abcd'
// 'abababcdcdcd' -> 'abcd'


//brute force
function removeDupes(str) {
  const characters = {};
  const uniqueCharacters = [];
  
  for(let i = 0; i < str.length; i++) {
      const thisChar = str[i];

      if(!characters[thisChar]) {
          characters[thisChar] = true;
          uniqueCharacters.push(thisChar);
      }
  }
  
  return uniqueCharacters.join('');

  //elegant
  function removeDupes(str) {
    const uniqueCharacters = new Set(str);
    return Array.from(uniqueCharacters).join('');
}