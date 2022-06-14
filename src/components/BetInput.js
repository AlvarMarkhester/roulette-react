import React from "react";

function BetInput(props) {
    
    function handleBet(e) {
        if (isNaN(e.target.value)) return;
        if (e.target.value === "") {
            props.setCurrentBetInput(0);
          return;
        }
        props.setCurrentBetInput(parseInt(e.target.value));
      }
  return (
    <div className="bet-input-container">
      <div className="input-div">
        <span className="helper-bet-text">Enter bet amount..</span>
        <input value={props.currentBetInput} onChange={(e) => handleBet(e)}></input>
      </div>
      <button onClick={() => props.setCurrentBetInput(0)}>CLEAR</button>
      <button onClick={() => props.setCurrentBetInput(props.currentBetInput + 1)}>
        +1
      </button>
      <button onClick={() => props.setCurrentBetInput(props.currentBetInput + 10)}>
        +10
      </button>
      <button onClick={() => props.setCurrentBetInput(props.currentBetInput + 100)}>
        +100
      </button>
      <button onClick={() => props.setCurrentBetInput(props.currentBetInput + 1000)}>
        +1000
      </button>
      <button onClick={() => props.setCurrentBetInput(props.currentBetInput / 2)}>
        1/2
      </button>
      <button onClick={() => props.setCurrentBetInput(props.currentBetInput * 2)}>
        X2
      </button>
      <button onClick={() => props.setCurrentBetInput(props.balance)}>MAX</button>
    </div>
  );
}

export default BetInput;
