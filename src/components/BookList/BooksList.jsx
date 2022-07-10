import React from "react";
import style from "./BooksList.module.css";
import { BookCard } from "../shared/BookCard";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

function BooksList() {
  const { bookList, totalItems, isSearching, isLoadingBooks } = useSelector(
    (state) => state
  );

  return (
    <div className={style.component}>
      {isLoadingBooks ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export { BooksList };
