import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

const blog = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default blog;
