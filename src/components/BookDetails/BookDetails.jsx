import React from "react";

import style from "./BookDetails.module.css";
import books from "../../fakeData.json";

function BookDetails() {
  const book = books.items[20];

  console.log(book);

  return (
    <div className={style.component}>
      <div className={style.cover}>
        <div className={style.imageWrapper}>
          <img
            className={style.image}
            src={book.volumeInfo.imageLinks.thumbnail}
            alt=""
          />
        </div>
      </div>
      <div className={style.details}>
        <a className={style.category}>
          {book.volumeInfo.categories ? book.volumeInfo.categories[0] : ""}
        </a>
        <p className={style.title}>{book.volumeInfo.title}</p>
        <p className={style.authors}>
          {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
        </p>
        <p className={style.description}>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
}

export { BookDetails };
