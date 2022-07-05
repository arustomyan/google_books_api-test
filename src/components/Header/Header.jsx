import React from "react";
import style from "./Header.module.css";
import SortingSelect from "../shared/SortingSelect/SortingSelect";
import SearchForm from "../shared/SearchForm/SearchForm";

function Header() {
  return (
    <header className={style["Header"]}>
      <h1 className={style["Header-label"]}>Search for books</h1>
      <SearchForm />

      <div className={style["Container"]}>
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

export default Header;
