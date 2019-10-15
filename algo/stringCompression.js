function compress(str) {
  let strCount = '';
  let count = 0;
  for (i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      strCount += str[i] + count.toString();
      count = 0;
    }
  }
  return strCount;
}

console.log(compress('aabbccc'));
