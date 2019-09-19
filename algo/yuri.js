// Write a function for array of integers that returns the number of times a specific digit appearrs in any of it's numbers

// solution_1([5,15,55,'515'],5) ===6

function solution(arr, str) {
  return arr
    .join('')
    .split('')
    .filter(c => c === str).length;
}
