import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>akamanDev</div>
      <div className={styles.text}>
        copyright @2024 akaman ~ all rights reservered
      </div>
    </div>
  );
};

export default Footer;
