import React, { useState } from "react";
import style from "./SortingSelect.module.css";

function SortingSelect({ children, label, callback }) {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState("");

  const handleSelect = (e) => {
    setValue(e.target.value);
    callback(e.target.value);
  };

  return (
    <>
      <label htmlFor="categories" className={style.label}>
        {label}
      </label>
      <select
        name="categories"
        className={style.select}
        value={value}
        onChange={handleSelect}
      >
        {children}
      </select>
    </>
  );
}

export { SortingSelect };
