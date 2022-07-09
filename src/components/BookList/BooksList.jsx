import React from "react";
import style from "./BooksList.module.css";
import { BookCard } from "../shared/BookCard";
import { useSelector } from "react-redux";

function BooksList() {
  const { bookList, totalItems, isSearching } = useSelector((state) => state);

  return (
    <div className={style.component}>
      {!isSearching ? (
        <p>Enter a search query</p>
      ) : (
        <p className={style.totalItems}>
          {totalItems ? `Found ${totalItems} result` : `Nothing found`}
        </p>
      )}

      <div className={style.container}>
        {bookList.map((item, i) => (
          <BookCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export { BooksList };
