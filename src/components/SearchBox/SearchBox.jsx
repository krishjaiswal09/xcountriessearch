import React from "react";
import styles from "./SearchBox.module.css";

function SearchBox({ search, handleSearch }) {
  return (
    <form action="search" className={styles.wrapper}>
      <input
        type="input"
        placeholder="Search for countries..."
        className={styles.search}
        value={search}
        onChange={handleSearch}
      />
    </form>
  );
}

export default SearchBox;
