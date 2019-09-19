//reduce can be good for turning arrays into objects

// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.reduce((accumulator, value, index, array) => {
//   console.log(`${index}: `);
//   console.log('Accumulator: ', accumulator);
//   console.log(`Value at index ${index}: ${value}`);
//   console.log('OriginalArray: ', array);
//   console.log('=============');

//   accumulator[index] = value * 2;

//   return accumulator;
// }, []);
// console.log('Final Result: ', newArray); // [2, 4, 6, 8, 10]

//turn all of the indexes in the array into keys in an object. the value for each should be true
// const myArray = ['a', 'b', 'c', 'd'];
// const myObject = myArray.reduce((accumulator, value) => {
//   accumulator[value] = true;
//   return accumulator;
// }, {});
// console.log(myObject);

//Find the total number of combined pilot years
const pilots = [
  {
    id: 10,
    name: 'Poe Dameron',
    years: 14
  },

  {
    id: 41,
    name: 'Tallissan Lintra',
    years: 16
  },
  {
    id: 99,
    name: 'Ello Asty',
    years: 22
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  }
];

// let totalYears = pilots.reduce((accumulator, pilot) => {
//   return accumulator + pilot.years;
// }, 0);

// console.log(typeof totalYears);

//Find the pilot with the most years experience and rreturn
// let mostExpPilot = pilots.reduce(function(oldest, pilot) {
//   console.log('Current Pilot checked: ', pilot);
//   console.log('Curent Oldest Pilot: ', oldest);
//   console.log('=========');
//   return (oldest.years || 0) > pilot.years ? oldest : pilot;
// }, {});

// console.log(mostExpPilot);
