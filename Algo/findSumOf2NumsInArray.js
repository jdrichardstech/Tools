/* brute force*/

function findSumBrute(arr, sum) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arrl.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

/*optimal*/
function findSum(arr, sum) {
  let obj = {};
  let difference;

  for (i = 0; i < arr.length; i++) {
    let num = arr[i];
    difference = sum - num;
    if (obj[difference]) {
      return true;
    } else {
      obj[num] = true;
    }
  }
  return false;
}

let arr = [1, 3, 4, 5, 6];
