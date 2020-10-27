//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

//stateless functional component
// always return JSX

function Greeting() {
  return <h4>Hello World!</h4>;
} //there wil be error if not returned something

ReactDom.render(<Greeting />, document.getElementById("root")); //this is how we connect in react
