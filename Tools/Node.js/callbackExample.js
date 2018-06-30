var getUser = (id, callback) => {
  var user = {
    id: "23",
    name: "JD"
  };
  callback(user);
};

getUser(31, userObject => {
  console.log(userObject);
});
