function binarySearch(arr, value) {
  function search(low, high) {
    if (low > high) return null;
    if (arr[low] === value) return low;
    if (arr[high] === value) return high;

    let middle = Math.floor((low + high) / 2);
    let middleElement = arr[middle];

    if (value < middleElement) return search(low + 1, middle);
    else if (value > middleElement) return search(middle, high - 1);
    return middle;
  }

  let setLowHi = search(0, arr.length - 1);
  return setLowHi === null ? 'does not exist' : setLowHi;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
