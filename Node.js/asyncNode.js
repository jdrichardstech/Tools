console.log("First console message");

setTimeout(() => {
  console.log("First SetTimeout");
}, 2000);

setTimeout(() => {
  console.log("Second SetTimeout");
}, 0);

console.log("Second console message");
