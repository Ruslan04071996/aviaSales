import React from "react";
import "normalize.css";
import ReactDom from "react-dom";
import classes from './index.module.scss'
const {main} = classes

const App = () => {
  return <main className={main}>
      
  </main>;
};
ReactDom.render(<App />, document.querySelector("#root"));
// Начинай делать лого