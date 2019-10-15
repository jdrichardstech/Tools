//https://itnext.io/a-quick-practical-use-case-for-es6-generators-building-an-infinitely-repeating-array-49d74f555666

function* repeatedArray(arr) {
  let index = 0;
  while (true) {
    yield arr[index++ % arr.length];
  }
}

const lifts = ['squat', 'bench', 'deadlift', 'press'];
const nextLiftGenerator = repeatedArray(lifts);

const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

// This creates an empty array of totalNumSessions length
// for me to map over
const cycle = [...Array(totalNumSessions)].map(() => ({
  lift: nextLiftGenerator.next().value
}));

console.log(cycle);
console.log([...Array(33)].map((item, idx) => idx + 1));
