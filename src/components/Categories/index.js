import React from "react";
import styles from "./Categories.module.scss";

const categories = [
  "кофе",
  "кофе 10%",
  "еда",
  "товарка",
  "настя",
  "staff",
  "зерно",
];

function Categories({ value, onClickCategory }) {
  return (
    <div className={styles.wrapper}>
      <ul>
        {categories.map((name, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
