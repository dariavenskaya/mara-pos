import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="25"
          height="25">
          <path
            fill="#ffff"
            d="M23,4a2,2,0,0,1-2,2H3A2,2,0,0,1,3,2H4.184A3,3,0,0,1,7,0H17a3,3,0,0,1,2.816,2H21A2,2,0,0,1,23,4ZM10,16c.105,3.954,3.895,3.953,4,0C13.9,12.046,10.105,12.047,10,16ZM8.081,15c.892-5.287,6.948-5.284,7.838,0h5.088l.735-5.876A1,1,0,0,0,20.75,8H3.25a1,1,0,0,0-.992,1.124L2.992,15Zm7.838,2c-.892,5.287-6.947,5.284-7.838,0H3.242l.328,2.62A5.008,5.008,0,0,0,8.531,24h6.938a5.008,5.008,0,0,0,4.961-4.38L20.757,17Z"
          />
        </svg>

        <h3>Лучшее POS-приложение</h3>
      </div>
      <div className={styles.record}>
        <svg
          className={styles.recordSvg}
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="25"
          height="25">
          <path d="M23,22H3a1,1,0,0,1-1-1V1A1,1,0,0,0,0,1V21a3,3,0,0,0,3,3H23a1,1,0,0,0,0-2Z" />
          <path d="M15,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,15,20Z" />
          <path d="M7,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,7,20Z" />
          <path d="M19,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,19,20Z" />
          <path d="M11,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,11,20Z" />
        </svg>
        <p className={styles.recordCapt}>смотреть отчет</p>
      </div>
    </div>
  );
}
export default Header;
