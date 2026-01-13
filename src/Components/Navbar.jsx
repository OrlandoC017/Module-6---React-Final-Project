import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Logo from "../Assets/Movie_Database-Cropped.png";

function NavBar() {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="Logo__Wrapper">
          <img src={Logo} className="Logo" alt="" />
        </Link>
        <div className="Nav__Links">
          <Link className="Nav__Link" to="/">
            Home
          </Link>
          

          <Searchbar />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
