import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/about.png"
            alt=""
            width={50}
            height={50}
            className={styles.avater}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Cruse</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>06.10.23</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi at
          necessitatibus non ducimus libero animi.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
