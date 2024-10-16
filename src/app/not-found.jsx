import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not found buddy</h1>
      <p>Go back home</p>
      <Link href="/">Homepage</Link>
    </div>
  );
};

export default NotFound;
