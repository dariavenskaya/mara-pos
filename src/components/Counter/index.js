import React from "react";
import ItemInCounter from "../ItemInCounter";
import styles from "./Counter.module.scss";

// import { ItemsContext } from "../App";

function Counter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>касса</div>
      <div className={styles.itemsWrap}>
        <ItemInCounter />
      </div>
      <div className={styles.actions}>
        <div className={styles.clear}>очистить все</div>
        <div className={styles.pay}>оплата</div>
      </div>
    </div>
  );
}
export default Counter;
