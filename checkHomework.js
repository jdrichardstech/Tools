function isItLong(str) {
  let response = ' ';

  if (str.length > 20) {
    response = "That's a long string!";
  } else if (str.length < 20 || str.length === 20) {
    response = undefined;
  }
  return response;
}

function isItMedium(str) {
  let response = ' ';

  if (str.length >= 10 && str.length <= 20) {
    response = "That's a regular sized string!";
  } else if (str.length < 10 || str.length > 20) {
    response = undefined;
  }
  return response;
}

function isItShort(str) {
  let response = ' ';

  if (str.length < 10) {
    response = "That's a small string!";
  } else if (str.length > 10) {
    response = undefined;
  }

  return response;
}

function howLongIsMyString(str) {
  let response = isItLong(str) || isItMedium(str) || isItShort(str);

  return response;
}

console.log(howLongIsMyString('Thi'));
