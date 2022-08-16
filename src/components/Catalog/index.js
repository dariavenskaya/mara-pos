import React from "react";
import Categories from "../Categories";
import Item from "../Item";
import styles from "./Catalog.module.scss";

// import { ItemsContext } from "../App";

function Catalog() {
  const [category, setCategory] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const categoryID = `category=${category}`;

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://62f7c196ab9f1f8e8902d90e.mockapi.io/coffee?${categoryID}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className={styles.wrapper}>
      <Categories value={category} onClickCategory={(i) => setCategory(i)} />
      <div className={styles.itemsWrap}>
        {items.map((obj) => (
          <Item key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
