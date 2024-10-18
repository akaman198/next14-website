import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className={styles.contactImg}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="number" placeholder="Phone number (optional)" />
          <textarea
            name=""
            cols={30}
            rows={5}
            id=""
            placeholder="Message"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
