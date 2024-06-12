import React, { useEffect, useState } from "react";
import style from "./BookDetails.module.css";
import { useParams } from "react-router-dom";
import RestApi from "../../api/api";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

function BookDetails() {
  const params = useParams();
  const [book, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchBook = async () => {
    return await RestApi.getBook(params.id);
  };

  useEffect(() => {
    fetchBook().then((res) => {
      setBooks(res);
      setIsLoading(false);
    });
  }, [params]);

  return (
    <div className={style.component}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={style.cover}>
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`Cover of ${book.volumeInfo.title}`}
              />
            </div>
          </div>
          <div className={style.details}>
            <a className={style.category}>
              {book.volumeInfo.categories ? book.volumeInfo.categories[0] : ""}
            </a>
            <p className={style.title}>{book.volumeInfo.title}</p>
            <p className={style.authors}>
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : ""}
            </p>
            <TestBlock />
            <p className={style.description}>{book.volumeInfo.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export { BookDetails };

const TestBlock = () => {
  const { bookList, totalItems, isSearching, isLoadingBooks, queryApi } =
    useSelector((state) => state);
  return <div>Testc wedmew kwmd </div>;
};
