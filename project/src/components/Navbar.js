import React from "react";
import { Logo } from "../assets/Logo";
import Burger from "../assets/Burger";

const Navbar = () => {
  return (
      <header className="navbar__container">
        <div className="navbar__container-logo"><Logo/></div>
    <nav>
        <div className="navbar__container-burger" > <Burger/></div>
      
      <ul className="navbar__container-links">
      <li>
          <a href="#">Deposit</a>
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Company</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
    </nav>
      </header>
  );
};

export default Navbar;
