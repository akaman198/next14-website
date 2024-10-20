import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.02.23</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default postCard;
