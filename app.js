const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('hello node');
// });

app.listen(port, () => {
  console.log('Listening on 3000');
});
