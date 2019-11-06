const order = 'Slurpy';

const drink = new Promise((resolve, reject) => {
  console.log(`Server says: "I'll be right back with your ${order}"`);
  const error = false;
  if (error) {
    setTimeout(() => {
      reject();
    }, 2000);
  } else {
    setTimeout(() => {
      resolve(order);
    }, 4000);
  }
});

drink
  .then(item => {
    console.log(`Server returns: "Here is your ${item}".`);
  })
  .catch(err => {
    console.log(`Sever returns: "Sorry, We are all out of ${order}"`);
  });

// let places = [
//   { name: "Joe's Pizza", address: '285 Madison' },
//   { name: 'Dunkin Donuts', address: '299 42nd St' }
// ];
// let murrays = { name: "Murray's Steakhouse", address: '1222 Lexington Ave' };

// const httpPlaces = array => {
//   setTimeout(() => {
//     console.log('Here is the new output:');
//     array.forEach(item => {
//       console.log(item);
//     });
//   }, 2000);
// };

// function addPlace(object, array) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false;
//       if (error) {
//         reject('Oops! Something is wrong');
//       } else {
//         console.log(`Here is the original array:`);
//         console.log(places);
//         console.log('---------------');
//         resolve(array.push(object));
//       }
//     }, 4000);
//   });
// }

// addPlace(murrays, places)
//   .then(() => {
//     httpPlaces(places);
//   })
//   .catch(err => console.log(err));
