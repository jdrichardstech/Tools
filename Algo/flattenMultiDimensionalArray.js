function flatten(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentIndex = arr[i];

    if (Array.isArray(currentIndex)) {
      const innerArr = flatten(currentIndex);

      for (let j = 0; j < innerArr.length; j++) {
        newArr.push(innerArr[j]);
      }
    } else {
      newArr.push(currentIndex);
    }
  }

  return newArr;
}
