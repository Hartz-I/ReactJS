//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

//JSX rules
//return single element
//div / section / article / or fragment(React.fragment or <></> this does not creat div): write these insted of div based on context
//use camelCase for html attributes
//className instead of class
//close every element
//formating

function Greeting() {
  return (
    <section>
      <article onClick="#" className="">
        <h1>Hello World!</h1>
        <h3>Hello People!</h3>
        <ul>
          <li>Hfe</li>
          <li>He</li>
          <a href="#">Hello World!</a>
          <img src="" />
        </ul>
      </article>
      <div>2nd div is here!</div>
    </section>
    //<div></div> adding this or another div will create error!
  );
}

ReactDom.render(<Greeting />, document.getElementById("root")); //this is how we connect in react
