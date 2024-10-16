import React from "react";
import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div>
      <div>logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
