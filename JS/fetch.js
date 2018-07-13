var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
  .then(request => {
    if (!request.ok) {
      throw Error();
    }
    return request;
  })
  .then(function(res) {
    return res.json();
  })
  .then(data => {
    console.log(data);
    document.querySelector("#app").innerHTML = data.disclaimer;
  })
  .catch(err => {
    console.log(error);
  });
