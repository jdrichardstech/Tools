function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

let combine =
  doubleAfter2Seconds(10) + doubleAfter2Seconds(3) + doubleAfter2Seconds(5);

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(3);
  const c = await doubleAfter2Seconds(5);
  return a + b + c + x;
}

// doubleAfter2Seconds(3).then((r) => {
//   console.log(r)
// })

addAsync(9).then(sum => {
  console.log(sum);
});
