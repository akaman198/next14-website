import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

const text = async () => {
  const posts = await getData();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
};

export default text;
