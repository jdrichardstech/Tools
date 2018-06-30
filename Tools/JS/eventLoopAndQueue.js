//  eventLoopAndQueue.js
// the Event Loop handles functions that will be placed on the queue when the queue is empty. It is FIFO




// 

function multiply(num) {
  return console.log(num * num);
}

setTimeout(function() {
  return console.log("Set Timeout");
}, 0);

multiply(3);
