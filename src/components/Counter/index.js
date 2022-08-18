import React from "react";
import ItemInCounter from "../ItemInCounter";
import styles from "./Counter.module.scss";

import { clearItems } from "../../redux/slices/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  // const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onClear = () => {
    dispatch(clearItems());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>касса</div>
      <div className={styles.itemsWrap}>
        {items.map((item) => (
          <ItemInCounter key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.summary}>
        <p>
          <b>Сумма: {totalPrice.toFixed(1)} р</b>
        </p>
      </div>
      <div className={styles.actions}>
        <div onClick={onClear} className={styles.clear}>
          очистить все
        </div>
        <div className={styles.pay}>оплата</div>
      </div>
    </div>
  );
}
export default Counter;
