/*nth stair solution 1,2,or 3
remove 3rd base case etc for 1 or 2 version
https://www.youtube.com/watch?v=YTdhH5Uk06E
*/

//recursively
function countStepsRecursive(n) {
  // just as in our solution explanation above, we know that to climb 1 step
  // there is only 1 solution, and for 2 steps there are 2 solutions
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;

  // for all N > 3, we add the previous (N - 1) + (N - 2) steps to get
  // an answer recursively
  return (
    countStepsRecursive(n - 1) +
    countStepsRecursive(n - 2) +
    countStepsRecursive(n - 3)
  );
}
console.log(countStepsRecursive(2));

function countStepsIterative(n) {
  //base cases
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;

  //only use memory to remember stairs less than n
  let bases = [1, 2, 4];
  let current = 3; //only used when n is > 3

  while (n > current) {
    //update the previous steps or the bases
    let basesTotal = bases[0] + bases[1] + bases[2];
    bases[0] = bases[1];
    bases[1] = bases[2];
    bases[2] = basesTotal;
    ++current;
  }
  return bases[2];
}
console.log(countStepsIterative(2));
