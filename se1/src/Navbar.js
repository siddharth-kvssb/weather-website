import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">WEATHER FOR YOU</div>
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="./AboutUS">
          <li>ABOUT US</li>
        </Link>
        <Link to="./Contact">
          <li>CONTACT US</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
