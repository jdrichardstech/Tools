function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    console.log('char: ', char);

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i)
      // if char was used already
      continue; // skip it this time

    var remainingString =
      string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
    console.log('rem: ', remainingString);
    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation);
  }
  return permutations;
}

// console.log(permut('kkfks'))
//-------------///

function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    // console.log('firstchar:', firstChar)
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    console.log('string:', string.substring(i + 1));
    // console.log('charsleft:', charsLeft)
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

// console.log(getAllPermutations('kkfks'))

function permutations(str) {
  var arr = str.split(''),
    len = arr.length,
    perms = [],
    rest,
    picked,
    restPerms,
    next;

  if (len == 0) return [str];

  for (var i = 0; i < len; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);

    restPerms = permutations(rest.join(''));

    for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(''));
    }
  }
  return perms;
}

console.log(getAllPermutations('kkfks'));

// Explanation:

// Idea: Idea is very simple. We will convert the string to an array. from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.
// step-1 First copy original array to avoid changing it while picking elements
// step-2 Use splice to removed element from the copied array. We copied the array because splice will remove the item from the array. We will need the picked item in the next iteration.
// step-3 [1,2,3,4].splice(2,1) will return [3] and remaining array = [1,2,4]
// step-4 Use recursive method to get the permutation of the rest of the elements by passing array as string
// step-5 Finally, concat like a+permute(bc) for each
