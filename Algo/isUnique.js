// Create a function that determines whether all characters in a string are unique or not. Make it case-sensitive, meaning a string with both 'a' and 'A' could pass the test.

// Input: String

// Output: Boolean

// isUnique('abcdef'); // -> true
// isUnique('89%df#$^a&x'); // -> true
// isUnique('abcAdef'); // -> true
// isUnique('abcaef'); // -> false

// brute force
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}

//elegant
function isUnique(str) {
  return new Set(str).size === str.length;
}
