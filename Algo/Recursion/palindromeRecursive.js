var isPalindrome = function(str) {
  // base case #1
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    let newStr;
    newStr = str.substring(1, str.length - 1);

    isPalindrome(newStr);
  }
  return true;
};
