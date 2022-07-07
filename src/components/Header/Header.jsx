import React from "react";
import style from "./Header.module.css";
import { SortingSelect } from "../shared/SortingSelect/";
import { SearchForm } from "../shared/SearchForm";

function Header() {
  return (
    <header className={style.component}>
      <h1 className={style.label}>Search for books</h1>
      <SearchForm />

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
