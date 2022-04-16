import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const rootNode = document.getElementById("root");

// ReactDOM.createNode(rootNode).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootNode
);

//  reportWebVitals(console.log)
//  https://bit.ly/CRA-vitals
reportWebVitals();
