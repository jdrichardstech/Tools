import React from "react";
import ReactDOM from "react-dom";

const Title = () => (
  <div style={{ color: "red" }}>
    "My Minimal React Webpack Babel Setup";
    <p>Image below checks to make sure npm image-loader & webpack is working</p>
    <img
      style={{ width: 150 }}
      src={require("../dist/img/react.jpg")}
      alt="bank"
    />
  </div>
);

ReactDOM.render(<Title />, document.getElementById("app"));

module.hot.accept();
