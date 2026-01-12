import React from "react";
import Logo from "../Assets/Movie_Database-Cropped.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
      <div id="footer">
        <div className="footer__logo--wrapper">
          <img src={Logo} alt="" className="footer__logo" />
        </div>
        <div className="footer__links">
          <Link className="footer__link" to="/">Home</Link>
          <Link className="footer__link" to="/about">About</Link>
          <Link className="footer__link" to="/contact">Contact</Link>
        </div>
        <div className="footer__border"></div>
        <p className="copyright"> Copyright © 2026 Movie Database </p>
      </div>
      
   
  );
}
