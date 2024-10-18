import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

const blog = () => {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default blog;
