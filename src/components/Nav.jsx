import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          <li className="link-styled">
            <a>Store</a>
          </li>
          <li className="link-styled">
            <a>Mac</a>
          </li>
          <li className="link-styled">
            <a>iPad</a>
          </li>
          <li className="link-styled">
            <a>iPhone</a>
          </li>
          <li className="link-styled">
            <a>Watch</a>
          </li>
          <li className="link-styled">
            <a>AirPods</a>
          </li>
          <li className="link-styled">
            <a>Tv & Home</a>
          </li>
          <li className="link-styled">
            <a>Entertaiment</a>
          </li>
          <li className="link-styled">
            <a>Accessories</a>
          </li>
          <li className="link-styled">
            <a>Support</a>
          </li>
          <li>
            <img src={Search} alt="search" />
          </li>
          <li>
            <img src={Store} alt="store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
