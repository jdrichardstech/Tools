let str = 'How every poetr is the sames';
let findLongestWord = str => {
  let longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');
  return longestWord;
};
findLongestWord(str);

// if two words are same length it returns the first one

//less optimal
let findLongestWord = str => {
  var longestWord = str.split(' ').sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
};
findLongestWord('The quick brown fox jumped over the lazy dog');
