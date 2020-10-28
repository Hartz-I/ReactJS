//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

// nested Components and react tools

function Greeting() {
  //we are
  return (
    <div>
      <Person />
      <Massage />
    </div>
  );
}

//these components are used like bulding blocks!
const Person = () => <h2>John Doe</h2>;
const Massage = () => <p>This is my massage!</p>;

ReactDom.render(<Greeting />, document.getElementById("root")); //this is how we connect in react
