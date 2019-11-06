/**
 *  A promise is an object that represents a task that will be completed in the future
 *
 */
const json = [
  {
    name: 'Joe Willis',
    car: 'Honda',
    dog: 'golden retriever'
  },
  {
    name: 'Peter Frampton',
    car: 'Porsche',
    dog: 'german shepard'
  },
  {
    name: 'Lorie Stephens',
    car: 'Subaru',
    dog: 'cavalier'
  }
];

const axios = new Promise(function(resolve, reject) {
  const error = false;
  if (error) {
    reject('Something went wrong');
  } else {
    setTimeout(() => {
      resolve(json);
    }, 4000);
  }
});

axios
  .then(arr => {
    arr.map((element, idx) =>
      console.log(
        `${idx + 1}. ${element.name} has a ${element.car} and a ${element.dog}.`
      )
    );
  })
  .catch(err => console.log(err));
