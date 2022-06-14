import React, { useState } from "react";
import "./RouletteUI.css";

function RouletteUI(props) {
  const [currentBetInput, setCurrentBetInput] = useState(0);

  function handleBet(e) {
    if (isNaN(e.target.value)) return;
    if (e.target.value === "") {
      setCurrentBetInput(0);
      return;
    }
    setCurrentBetInput(parseInt(e.target.value));
  }
  function placeBet(type, betAmount) {
    if (props.balance < betAmount) 
      return alert("Not enough balance.");
    if (betAmount === 0)
      return alert("To bet you are required to increase your wager.");
    props.dispatch({ type: type, betAmount: betAmount });
    props.setBalance(props.balance - betAmount);
    setCurrentBetInput(0);
  }

  return (
    <div className="roulette-container">
      <div className="roll-container">
        <div className="red">1</div>
        <div className="black">14</div>
        <div className="red">2</div>
        <div className="black">13</div>
        <div className="red">3</div>
        <div className="black">12</div>
        <div className="red">4</div>
        <div className="green">0</div>
        <div className="black">11</div>
        <div className="red">5</div>
        <div className="black">10</div>
        <div className="red">6</div>
        <div className="black">9</div>
        <div className="red">7</div>
        <div className="black">8</div>
        <div className="red">1</div>
        <div className="black">14</div>
        <div className="red">2</div>
        <div className="black">13</div>
        <div className="red">3</div>
        <div className="black">12</div>
        <div className="red">4</div>
        <div className="green">0</div>
        <div className="black">11</div>
        <div className="red">5</div>
        <div className="black">10</div>
        <div className="red">6</div>
        <div className="black">9</div>
        <div className="red">7</div>
        <div className="black">8</div>
      </div>
      <div className="amount-container">
        <div className="input-div">
          <span className="helper-bet-text">Enter bet amount..</span>
          <input value={currentBetInput} onChange={(e) => handleBet(e)}></input>
        </div>
        <button onClick={() => setCurrentBetInput(0)}>CLEAR</button>
        <button onClick={() => setCurrentBetInput(currentBetInput + 1)}>
          +1
        </button>
        <button onClick={() => setCurrentBetInput(currentBetInput + 10)}>
          +10
        </button>
        <button onClick={() => setCurrentBetInput(currentBetInput + 100)}>
          +100
        </button>
        <button onClick={() => setCurrentBetInput(currentBetInput + 1000)}>
          +1000
        </button>
        <button onClick={() => setCurrentBetInput(currentBetInput / 2)}>
          1/2
        </button>
        <button onClick={() => setCurrentBetInput(currentBetInput * 2)}>
          X2
        </button>
        <button onClick={() => setCurrentBetInput(props.balance)}>MAX</button>
      </div>
      <div className="place-bet-container">
        <div className="bet-red">
          Win 2x
          <button onClick={() => placeBet("BET_RED", currentBetInput)}>
            Place bet
          </button>
        </div>
        <div className="bet-green">
          Win 14x
          <button onClick={() => placeBet("BET_GREEN", currentBetInput)}>
            Place bet
          </button>
        </div>
        <div className="bet-black">
          Win 2x
          <button onClick={() => placeBet("BET_BLACK", currentBetInput)}>
            Place bet
          </button>
        </div>
      </div>
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
