import React from "react";
import style from "./BookCard.module.css";

function BookCard({ item }) {
  return (
    <div className={style.component}>
      <div className={style.imageWrapper}>
        {item.volumeInfo.imageLinks.thumbnail ? (
          <img
            className={style.image}
            src={item.volumeInfo.imageLinks.thumbnail}
            alt={`Cover of ${item.volumeInfo.title}`}
          />
        ) : (
          <p>cover missing</p>
        )}
      </div>

      <a className={style.category}>
        {item.volumeInfo.categories ? item.volumeInfo.categories[0] : ""}
      </a>
      <p className={style.title}>{item.volumeInfo.title}</p>
      <p className={style.authors}>
        {item.volumeInfo.authors ? item.volumeInfo.authors[0] : ""}
      </p>
    </div>
  );
}

export default BookCard;
