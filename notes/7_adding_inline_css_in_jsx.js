//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

// CSS within components!
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"></img>
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;

const Author = () => (
  //inline css is stronger than css file call
  //we use it like this because it's a js environment
  <h4
    style={{
      letterSpacing: "5px",
      color: "#617d98",
      fontSize: "0.75rems",
      margin: "0.25rem",
    }}
  >
    Someone
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root")); //this is how we connect in react
