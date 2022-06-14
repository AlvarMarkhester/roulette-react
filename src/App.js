import React, { useReducer, useState } from "react";
import "./App.css";
import TopNavbar from "./components/TopNavbar";
import RouletteUI from "./components/RouletteUI";

const initialState = {
  betsOnRed: [],
  betsOnBlack: [],
  betsOnGreen: [],
  currentGameRoll: getRandomRoll(),
};

function getRandomRoll() {
  return Math.floor(Math.random() * 14);
}

function reducer(state, action) {
  switch (action.type) {
    case "BET_RED":
      return {
        ...state,
        betsOnRed: state.betsOnRed.concat(action.betAmount),
      };
    case "BET_GREEN":
      return {
        ...state,
        betsOnGreen: state.betsOnGreen.concat(action.betAmount),
      };
    case "BET_BLACK":
      return {
        ...state,
        betsOnBlack: state.betsOnBlack.concat(action.betAmount),
      };
    case 'GAME_RESET':
      return {
        ...state,
        currentGameRoll: getRandomRoll()
      }
    default:
      throw new Error();
  }
}

function App() {
  const [balance, setBalance] = useState(20000);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <TopNavbar balance={balance} />
      <RouletteUI balance={balance} setBalance={setBalance} state={state} dispatch={dispatch}/>
    </>
  );
}

export default App;
