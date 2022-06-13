import React from "react";
import "./RouletteUI.css";

function RouletteUI() {
  return (
    <div className="roulette-container">
      <div className="roll-container"></div>
      <div className="amount-container">
        <input placeholder="Enter bet amount.."></input>
        <button>CLEAR</button>
        <button>+1</button>
        <button>+10</button>
        <button>+100</button>
        <button>1/2</button>
        <button>MAX</button>
      </div>
      <div className="place-bet-container">
        <div className="bet-red">
        Win 2x
        <button>Place bet</button>
        </div>
        <div className="bet-green">
        Win 14x
        <button>Place bet</button>
        </div>
        <div className="bet-black">
        Win 2x
        <button>Place bet</button>
        </div>
      </div>
    </div>
  );
}

export default RouletteUI;
