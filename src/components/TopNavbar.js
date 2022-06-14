import React from "react";
import './TopNavbar.css'

function TopNavbar(props) {
  return (
    <div className="top-nav">
        <button>Coins: {props.balance}</button>
        <button>Profile</button>
    </div>
  );
}

export default TopNavbar;
