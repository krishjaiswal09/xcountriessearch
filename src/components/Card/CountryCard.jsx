import React from "react";
import styles from "./CountryCard.module.css";

function CountryCard({ name, flagImg, flagAltText }) {
  return (
    <div className={styles.card}>
      <img src={flagImg} alt={"Flag of " + flagAltText} className={styles.image} />
      <h2>{name}</h2>
    </div>
  );
}

export default CountryCard;
