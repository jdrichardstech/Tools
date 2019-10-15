convert_romNums = strNum => {
  let sum = 0;
  let arabicNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNums = [
    'M',
    'CM',
    'D',
    'XD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];

  let falseNums = ['IIII', 'XXXX', 'VXI'];

  strNum = strNum.toUpperCase();

  for (let i = 0; i < falseNums.length; i++) {
    if (strNum.indexOf(falseNums[i]) === 0) {
      return 'Incorrect Roman Numeral';
    }
  }

  for (let i = 0; i < arabicNums.length; i++) {
    while (strNum.indexOf(romanNums[i]) === 0) {
      sum += arabicNums[i];
      strNum = strNum.replace(romanNums[i], '');
    }
  }

  if (sum === 0) {
    return 'This is not a roman numeral';
  } else {
    return sum;
  }
};
