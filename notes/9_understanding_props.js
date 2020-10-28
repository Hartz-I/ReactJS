//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

// CSS
import "./index.css";

//adding props
const title = "I Love You to the Moon and Back";
const author = "Someone";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      {/*this is away to add property in props object */}
      <Book title="Random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p> {/*if the prop is not here it won't be displayed! */}
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root")); //this is how we connect in react
