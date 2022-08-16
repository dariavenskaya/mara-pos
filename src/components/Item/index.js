import React from "react";
import styles from "./Item.module.scss";

function Item({ title, price }) {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default Item;
