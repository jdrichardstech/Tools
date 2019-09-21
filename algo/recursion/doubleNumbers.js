const numbers = [1, 2, 3, 4];

const doubleNumbers = collection => {
  const [head, ...tail] = collection;
  return collection.length === 0 ? [] : [head * 2, ...doubleNumbers(tail)];
};
console.log(doubleNumbers(numbers));
