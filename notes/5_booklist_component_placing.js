//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

// nested Components and react tools

function BookList() { //will create as many instances of the book cmponent which has the other components in it!
  return (
    <section>
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
  //we can use this as many times we want and can change it once to change all!
  return (
    <article>
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

const Author = () => <h4>I Love You to the Moon and Back</h4>;

ReactDom.render(<BookList />, document.getElementById("root")); //this is how we connect in react
