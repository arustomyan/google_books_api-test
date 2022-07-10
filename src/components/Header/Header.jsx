import React from "react";
import style from "./Header.module.css";
import { SortingSelect } from "../shared/SortingSelect/";
import { SearchForm } from "../shared/SearchForm";
import {
  changeCategories,
  changeSorting,
  fetchBooksRequest,
  resetBookList,
  setIsSearching,
} from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const { categories, sorting } = useSelector((state) => state.queryApi);

  const onSubmit = (value) => {
    dispatch(resetBookList());
    dispatch(setIsSearching(true));

    value
      ? dispatch(fetchBooksRequest({ query: value, categories, sorting }))
      : dispatch(setIsSearching(false));
  };

  const handleCategories = (value) => {
    dispatch(changeCategories(value));
  };

  const handleSorting = (value) => {
    dispatch(changeSorting(value));
  };

  return (
    <header className={style.component}>
      <h1 className={style.label}>Search for books</h1>
      <SearchForm onSubmit={onSubmit} />

      <div>
        <SortingSelect label={"Categories"} callback={handleCategories}>
          <option value="">all</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="business">Business</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </SortingSelect>

        <SortingSelect label={"Sorting by"} callback={handleSorting}>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </SortingSelect>
      </div>
    </header>
  );
}

export { Header };
