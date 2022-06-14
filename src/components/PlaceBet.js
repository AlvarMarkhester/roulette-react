import React from "react";

function PlaceBet(props) {
  return (
    <div className="place-bet-container">
        <div className="bet-red">
          Win 2x
          <button onClick={() => props.placeBet("BET_RED", props.currentBetInput)}>
            Place bet
          </button>
        </div>
        <div className="bet-green">
          Win 14x
          <button onClick={() => props.placeBet("BET_GREEN", props.currentBetInput)}>
            Place bet
          </button>
        </div>
        <div className="bet-black">
          Win 2x
          <button onClick={() => props.placeBet("BET_BLACK", props.currentBetInput)}>
            Place bet
          </button>
        </div>
      </div>
  );
}

export default PlaceBet;
