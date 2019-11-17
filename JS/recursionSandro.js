// create a function that takreturn every piece of data from the array in a single array using recursion

// const data = {
//   name: 'sandro',
//   age: 30,
//   bio: {
//     education: { school: 'harvard', year: 2001, degree: 'bachelors' },
//     hobbies: ['skiing', 'fishing', 'movies']
//   }
// };
//---------//
// const data = {
//   name: "sandro",
//   age: 30,
//   bio: {
//     education: {school:"harvard", year:2001, degree:'bachelors'},
//      hobbies:['skiing','fishing','movies']
//   }
// }
// const data = {
//   _id: '5dc97be661a9cd096e61e2ff',
//   index: 0,
//   guid: 'd5aee766-e517-4b16-9b91-27f4b53f6785',
//   isActive: false,
//   balance: '$2,645.42',
//   picture: 'http://placehold.it/32x32',
//   age: 26,
//   eyeColor: 'brown',
//   name: {
//     first: 'Britney',
//     last: 'Wilkinson'
//   },
//   company: 'BOILICON',
//   email: 'britney.wilkinson@boilicon.info',
//   phone: '+1 (978) 543-2546',
//   address: '194 Aitken Place, Deseret, West Virginia, 3035',
//   about:
//     'Tempor esse amet dolore qui amet amet nisi laborum aute esse non ex duis. Ex Lorem officia irure excepteur do reprehenderit anim. Proident ut amet excepteur aliqua elit non elit. Tempor quis sunt magna quis nulla ex proident consectetur occaecat.',
//   registered: 'Tuesday, November 25, 2014 11:14 PM',
//   latitude: '62.889094',
//   longitude: '173.348184',
//   tags: ['minim', 'esse', 'quis', 'est', 'exercitation'],
//   range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   friends: [
//     {
//       id: 0,
//       name: 'Catalina Moore'
//     },
//     {
//       id: 1,
//       name: 'Griffin Howell'
//     },
//     {
//       id: 2,
//       name: 'Cobb Clements'
//     }
//   ],
//   greeting: 'Hello, Britney! You have 7 unread messages.',
//   favoriteFruit: 'apple'
// };
//------------//
const data = {
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Charles',
    last: 'Hall'
  },
  location: {
    street: {
      number: 2437,
      name: 'Pine Hill Road'
    },
    city: 'Palmerston North',
    state: 'Northland',
    country: 'New Zealand',
    postcode: 81883,
    coordinates: {
      latitude: '65.3561',
      longitude: '-88.1648'
    },
    timezone: {
      offset: '-12:00',
      description: 'Eniwetok, Kwajalein'
    }
  },
  email: 'charles.hall@example.com',
  login: {
    uuid: '3303a98c-b79c-4230-87f6-c44271a999e2',
    username: 'yellowgorilla781',
    password: 'johnson1',
    salt: 'RCJXimbY',
    md5: 'c4ad7779c0e822a0fa1dc9c3b4f96fbc',
    sha1: 'b0e7d3f6fc6aa7fe2c3627a177a90ddc1d0b9ddd',
    sha256: '8a0068d859ee601cfb69b5033ce43a75632eb5addbe8e88fa9edc2a8ad3e3e32'
  },
  dob: {
    date: '1960-06-18T18:19:49.997Z',
    age: 59
  },
  registered: {
    date: '2007-05-24T01:02:51.681Z',
    age: 12
  },
  phone: '(406)-556-8131',
  cell: '(227)-126-0483',
  id: {
    name: '',
    value: null
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/17.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/17.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/17.jpg'
  },
  nat: 'NZ'
};

function grabInfo(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      grabInfo(obj[key], arr);
    } else {
      arr.push(obj[key]);
    }
  }
  return arr;
}

let func = grabInfo(data);
console.log(func);
