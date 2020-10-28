//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

// stateless functional component/ dumb components
// always return JSX

function Greeting() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
} //there wil be error if not returned something

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World!")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root")); //this is how we connect in react
