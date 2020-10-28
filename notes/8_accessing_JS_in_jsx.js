//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

// CSS within components!
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "I Love You to the Moon and Back";
  const author = "Someone";
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"></img>
      <h1>{title /*this is how we access js in jsx */}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x=6}</p> this won't work as we can only return value not assighn*/}
      <p>{9 + 44}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root")); //this is how we connect in react
