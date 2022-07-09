import React from "react";
import style from "./Header.module.css";
import { SortingSelect } from "../shared/SortingSelect/";
import { SearchForm } from "../shared/SearchForm";
import {
  fetchBooksRequest,
  resetBookList,
  setIsSearching,
} from "../../store/action";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch(resetBookList());
    dispatch(setIsSearching(true));

    value
      ? dispatch(fetchBooksRequest(value))
      : dispatch(setIsSearching(false));
  };

  return (
    <header className={style.component}>
      <h1 className={style.label}>Search for books</h1>
      <SearchForm onSubmit={onSubmit} />

      <div>
        <SortingSelect>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </SortingSelect>

        <SortingSelect>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </SortingSelect>
      </div>
    </header>
  );
}

export { Header };
