import React from "react";
import style from "./SortingSelect.module.css";

function SortingSelect({ children }) {
  return (
    <>
      <label htmlFor="categories" className={style["Sorting-label"]}>
        Categories:
      </label>
      <select name="categories" className={style["Sorting-select"]}>
        {children}
      </select>
    </>
  );
}

export default SortingSelect;
