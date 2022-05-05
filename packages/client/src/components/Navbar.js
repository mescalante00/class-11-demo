import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/book">Home</Link>
        <Link to="/home">Meals</Link>
      </nav>
    </>
  );
};
