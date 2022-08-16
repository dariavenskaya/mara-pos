import React from "react";
import styles from "./ItemInCounter.module.scss";

function Counter(props) {
  return (
    <div className={styles.quantity}>
      <button
        disabled={props.count === 0}
        className={styles.minus}
        onClick={props.minus}>
        -
      </button>
      <div className={styles.number}>{props.count}</div>
      <button className={styles.plus} onClick={props.plus}>
        +
      </button>
    </div>
  );
}
function ItemInCounter(props) {
  const [count, setCount] = React.useState(1);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>capucina</div>
      <div className={styles.name}>3.5</div>
      <div className={styles.actions}>
        <Counter plus={plus} minus={minus} count={count} />
      </div>
      {/* <div className={styles.subtotal}>{count * props.price}</div> */}
    </div>
  );
}

export default ItemInCounter;
