import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navBar">
      <ul className="navUl">
        <li>
          <a href="#addCard">Add Word</a>
        </li>
        <li>
          <h1>Anki Adder</h1>
        </li>
        <li>
          <a href="#tuto">Tutorial</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
