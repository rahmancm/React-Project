import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

const books = [
  {
    img:
      "https://res.cloudinary.com/rahmancm/image/upload/v1602853431/6d55fb0617cd48501f95dfc05506c578_naiick.png",
    description: "A very Good Book by John",
    title: " React Book That will make you Pro in React",
    author: "Daiela John",
  },

  {
    img:
      "https://res.cloudinary.com/rahmancm/image/upload/v1603568140/png-transparent-web-development-software-developer-web-developer-computer-icons-world-wide-web-web-design-logo-sign_o5pwzq.png",
    description: "Book That will make you High",
    title: " High Book Shelf",
    author: "Theresa mann ",
  },
];

function BookList() {
  return (
    <section>
      <h1 className="header"> Free books online </h1>
      <hr />
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, description, author } = props.book;
  return (
    <article>
      <strong>
        <img src={img} alt="iamhge" />
        <br />
        <h1>{title}</h1>
        <br />
        <p>{description} </p>
        <br />
        <a href="author">{author}</a>
      </strong>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
