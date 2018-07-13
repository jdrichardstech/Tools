fs.appendFile will add a file to your folder and add any text you tell it to.a
If you run this function and the file already exists it will append the data to the end of the file.


const fs = require('fs');

//this works but is deprecated and needs a cb function
// you can open your terminal to run this but you may see a warning. It still works but it is a warning
fs.appendFile('greetings.txt', 'Hello Node')

//better
fs.appendFile('greetings.txt', 'Hello Node', (err)=>{
  if(err) console.log('Unable to Sync')
})

// OR
fs.appendFileSync('greetings.txt', 'Hello Node')