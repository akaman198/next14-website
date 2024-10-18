import React from "react";
import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.02.23</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          architecto animi, facere asperiores pariatur reprehenderit error rem
          vitae atque, itaque, nisi magnam accusamus hic libero voluptates
          perspiciatis id quasi obcaecati.
        </p>
        <Link href="/blog/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default postCard;
