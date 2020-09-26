import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Where in the world?</h1>
      <a href="#">
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </a>
      
    </div>
  );
};

export default Navbar;
