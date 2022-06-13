import React from "react";
import "./SideNavbar.css";

function SideNavbar() {
  return (
    <ul className="nav">
      <img className="logo" src={'/logo.png'} alt='gamble logo'/>
      <li className="nav-item">Roulette Demo</li>
    </ul>
  );
}

export default SideNavbar;
