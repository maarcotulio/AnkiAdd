import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <h1 className="logoName">Anki Adder</h1>
        </li>
        <li>
          <SearchBar type="word"></SearchBar>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
