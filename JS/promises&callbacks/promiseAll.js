//PROMISE.ALL
//Promise all will wait for all conditions to be met before rendering
// Show how a b c with consoles render in timeout order
// While promise all will render sequentially

const a = params => {
  setTimeout(() => {
    console.log('Promise 1');
  }, 2000);
};

const b = () => {
  setTimeout(() => {
    console.log('Promise 2');
  }, 5000);
};

const c = () => {
  setTimeout(() => {
    console.log('Promise 3');
  }, 1000);
};

a();
b();
c();

// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, 'Promise1')
// );

// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 5000, 'Promise2')
// );

// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 1000, 'Promise3')
// );

// Promise.all([promise1, promise2, promise3]).then(value => console.log(value));
