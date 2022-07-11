import React from "react";
import style from "./BooksList.module.css";
import { BookCard } from "../shared/BookCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader/Loader";
import { fetchBooksRequest } from "../../store/action";

function BooksList() {
  const dispatch = useDispatch();
  const { bookList, totalItems, isSearching, isLoadingBooks, queryApi } =
    useSelector((state) => state);

  const handleLoadMore = () => {
    dispatch(fetchBooksRequest({ ...queryApi, startIndex: bookList.length }));
  };

  return (
    <div className={style.component}>
      <>
        {!isSearching ? (
          <p className={style.homeLabel}>Enter a search query</p>
        ) : (
          <>
            {bookList.length && (
              <>
                <p className={style.totalItems}>
                  {totalItems ? `Found ${totalItems} result` : `Nothing found`}
                </p>

                <div className={style.container}>
                  {bookList.map((item, i) => (
                    <BookCard item={item} key={i} />
                  ))}
                </div>
              </>
            )}
            {isLoadingBooks ? (
              <Loader />
            ) : (
              <button className={style.textBtn} onClick={handleLoadMore}>
                Load more
              </button>
            )}
          </>
        )}
      </>
    </div>
  );
}

export { BooksList };
