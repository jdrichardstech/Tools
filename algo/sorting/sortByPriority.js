let array = [
  { name: 'Jill' },
  { priority: 1, name: 'John' },
  { priority: 2, name: 'Amanda' },
  { priority: 1, name: 'Paula' },
  { priority: 3, name: 'Greg' },
  { priority: 1, name: 'Lonnie' },
  { priority: 2, name: 'Stu' }
];

let sortArray = (arr, key) => {
  let newArr = [...arr];
  return newArr
    .sort((a, b) => {
      return a[key] - b[key];
    })
    .filter(item => item[key] !== undefined);
};

console.log(sortArray(array, 'priority'));
