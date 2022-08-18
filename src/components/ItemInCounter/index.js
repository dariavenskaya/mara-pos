import React from "react";
import styles from "./ItemInCounter.module.scss";

import {
  addItem,
  removeItem,
  minusItem,
} from "../../redux/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function ItemInCounter({ id, title, price, count }) {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.counter);
  const onPlus = () => {
    dispatch(addItem({ id }));
  };
  const onMinus = () => {
    dispatch(minusItem(id));
  };
  const onRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{title}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button
            disabled={count === 1}
            className={styles.minus}
            onClick={onMinus}>
            -
          </button>
          <div className={styles.number}>{count}</div>
          <button className={styles.plus} onClick={onPlus}>
            +
          </button>
        </div>
      </div>
      <div className={styles.subtotal}>{(count * price).toFixed(1)}</div>
      <div className={styles.remove} onClick={onRemove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="19"
          height="19">
          <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
          <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
          <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
        </svg>
      </div>
    </div>
  );
}

export default ItemInCounter;
