//    setInterval.js

let num = 1;
let intervalID = setInterval(function() {
  console.log(num);
  num++;
  if (num == 10) {
    console.log("All done!");
    clearInterval(intervalID);
  }
}, 1500);
