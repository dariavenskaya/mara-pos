import React from "react";
import styles from "./Item.module.scss";
import { useSelector, useDispatch } from "react-redux";

import { addItem } from "../../redux/slices/counterSlice";

function Item({ id, title, price }) {
  const dispatch = useDispatch();

  const counterItem = useSelector((state) =>
    state.counter.items.find((obj) => obj.id === id)
  );

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
    };
    dispatch(addItem(item));
  };

  return (
    <div onClick={onClickAdd} className={styles.wrapper}>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default Item;
