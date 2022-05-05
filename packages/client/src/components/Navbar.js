import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book">Books</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </>
  );
};
