import React, { useState } from "react";
import BetInput from "./BetInput";
import PlaceBet from "./PlaceBet";
import Rollwheel from "./Rollwheel";
import "./RouletteUI.css";

function RouletteUI(props) {
  const [currentBetInput, setCurrentBetInput] = useState(0);

  function placeBet(type, betAmount) {
    if (props.balance < betAmount) return alert("Not enough balance.");
    if (betAmount === 0)
      return alert("To bet you are required to increase your wager.");
    props.dispatch({ type: type, betAmount: betAmount });
    props.setBalance(props.balance - betAmount);
    setCurrentBetInput(0);
  }

  return (
    <div className="roulette-container">
      <Rollwheel />
      <BetInput
        balance={props.balance}
        currentBetInput={currentBetInput}
        setCurrentBetInput={setCurrentBetInput}
      />
      <PlaceBet placeBet={placeBet} currentBetInput={currentBetInput} />
      <div className="show-bets-container">
        <div className="bet-list">
          <div className="bets-header">
            <header>{props.state.betsOnRed.length} Bets</header>
            <header>
              {props.state.betsOnRed.reduce((a, b) => a + b, 0)} Amount
            </header>
          </div>
        </div>
        <div className="bet-list">
          <div className="bets-header">
            <header>{props.state.betsOnGreen.length} Bets</header>
            <header>
              {props.state.betsOnGreen.reduce((a, b) => a + b, 0)} Amount
            </header>
          </div>
        </div>
        <div className="bet-list">
          <div className="bets-header">
            <header>{props.state.betsOnBlack.length} Bets</header>
            <header>
              {props.state.betsOnBlack.reduce((a, b) => a + b, 0)} Amount
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouletteUI;
