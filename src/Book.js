import React from "react";

const Book = (props) => {
  const { img, title, description, author } = props;
  const clickHandler = () => {
    alert("No details fro this Book");
  };
  return (
    <article>
      <strong>
        <img src={img} alt="iamhge" />
        <br />
        <p
          onClick={() => {
            console.log(title);
          }}
        >
          {title}
        </p>
        <br />
        <p>{description} </p>
        <br />
        <a href="author">{author}</a>
        <button type="button" onClick={clickHandler}>
          Details
        </button>
      </strong>
    </article>
  );
};
export default Book;
