import React, { useState,useEffect } from "react";
import { Logo } from "../assets/Logo";
import Burger from "../assets/Burger";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    openNav ? disableScroll() : enableScroll();
  }, [openNav]);

  const disableScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scroll({
        top: scrollTop,
        left: scrollLeft,
      });
    };
  };
  const enableScroll = () => {
    window.onscroll = () => {};
  };

  const animateMenu = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  };

  return (
    <header className="navbar__container">
      <div className="navbar__container-logo">
        <Logo />
      </div>
      <nav>
        <div
          className={`navbar__container-burger ${openNav ? "clicked" : ""}`}
          onClick={animateMenu}
        >
          {" "}
          <Burger />
        </div>

        <ul className={`navbar__container-links ${openNav ? "open" : ""}`}>
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
