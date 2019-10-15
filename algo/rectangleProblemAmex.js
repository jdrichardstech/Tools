let upperLeft1 = {
  x: 0,
  y: 0,
  width: 4,
  height: 3
};

let upperLeft2 = {
  x: 0,
  y: 0,
  width: 1,
  height: 2
};

function isInside(rect1, rect2) {
  let lowerRight1 = {};
  let lowerRight2 = {};
  lowerRight1['x'] = rect1.x + rect1.width;
  lowerRight1['y'] = rect1.y - rect1.height;
  lowerRight2['x'] = rect2.x + rect2.width;
  lowerRight2['y'] = rect2.y - rect2.height;
  console.log('upleft1', upperLeft1);
  console.log('lowright1', lowerRight1);
  console.log('upleft2', upperLeft2);
  console.log('lowerRight2', lowerRight2);
  if (rect1.x > lowerRight2.x || rect2.x > lowerRight1.x) return false;
  if (upperLeft1.y < lowerRight2.y || rect2.y < lowerRight1.y) return false;
  return true;
}

console.log(isInside(upperLeft1, upperLeft2));
