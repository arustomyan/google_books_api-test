import React from "react";
import books from "../../fakeData.json";
import style from "./BooksList.module.css";
import { BookCard } from "../shared/BookCard";

function BooksList() {
  const items = books.items;

  return (
    <div className={style.component}>
      {items.map((item, i) => (
        <BookCard item={item} key={i} />
      ))}
    </div>
  );
}

export { BooksList };
