///Add this to your html  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>

//******* you can add a params to your get request */
//var params = {
//   params: {
//     category: "Entertainment: Video Games"
//   }
// };
var url = 'https://opentdb.com/api.php?amount=3';

axios
  .get(url)

  .then(res => {
    return res.data.results[0];
  })
  .then(data => {
    let dataArr = Object.entries(data);
    console.log(data);
    let newP = document.createElement('p');
    newP.innerHTML =
      'Question: ' +
      data.question +
      '<br />' +
      'Answer: ' +
      data.correct_answer;
    return document.querySelector('#app').appendChild(newP);
  })
  .catch(handleErrors);

function handleErrors(err) {
  if (err.response) {
    console.log('Problem with response: ', err.response.status);
  } else if (err.request) {
    console.log('Problem with request');
  } else {
    console.log('Error: ', err.message);
  }
}
