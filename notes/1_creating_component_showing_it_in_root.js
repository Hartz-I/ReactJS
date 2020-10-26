//we'll add a component. just react and function
import React from "react"
import ReactDom from "react-dom" //connect with root div in index.html

function Greeting(){ //to let react know that this is special we capitalize the first letter
  return <h4>This is Inan and this is my first component!</h4>;
}

ReactDom.render(<Greeting /> , document.getElementById('root')); //this is how we connect in react