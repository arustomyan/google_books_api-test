import React from "react";
import style from "./Loader.module.css";

function Loader() {
  return (
    <div className={style.component}>
      <div className={style.loader}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
