import React, { useEffect, useState } from "react";

import style from "./BookDetails.module.css";
import books from "../../fakeData.json";
import { useParams } from "react-router-dom";
import RestApi from "../../api/api";

function BookDetails() {
  const bookq = books.items[20];
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [book, setBooks] = useState(bookq);

  const fetchBook = async () => {
    return await RestApi.getBook(params.id);
  };

  useEffect(() => {
    fetchBook().then((res) => {
      setBooks(res);
      console.log(res);
    });
  }, [params]);

  console.log(params);
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
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
}

export { BookDetails };
