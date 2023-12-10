import React from 'react'
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand.png";
import { Link } from "react-scroll";

const Jumbatron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iphone 14 Pro" />
      <h1 className="text">Big and bigger.</h1>
      <span className="description">
        From €41.62/mo. for 24 mo. or €999 befoe trade in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <Link
            className="link"
            to="sound-section"
            smooth={true}
            duration={500}
          >
            Learn more
          </Link>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
    </div>
  );
}

export default Jumbatron
