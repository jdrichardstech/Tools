// by starting with the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of numbers can be reached. write a function, given a target number, that tries to find a sequence of additions and multiplications that produce the number. for example 13 can be reached by first multiplying by 3 and then adding 5 twice, whereas 15 cannot be reached

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return 'target number cannot be reached';
    } else {
      return (
        find(current + 5, `${history} + 5`) ||
        find(current * 3, `${history} * 3`)
      );
    }
  }
  return find(1, '1');
}

console.log(findSolution(132));
