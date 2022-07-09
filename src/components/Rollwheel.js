import React, { useState } from "react";

const COLORS = {
  red: "#ff0000b3",
  black: "#000000b3",
  green: "#0ac90abd",
};

const INITIAL_LAYOUT = [
  [COLORS.red, 1],
  [COLORS.black, 14],
  [COLORS.red, 2],
  [COLORS.black, 13],
  [COLORS.red, 3],
  [COLORS.black, 12],
  [COLORS.red, 4],
  [COLORS.green, 0],
  [COLORS.black, 11],
  [COLORS.red, 5],
  [COLORS.black, 10],
  [COLORS.red, 6],
  [COLORS.black, 9],
  [COLORS.red, 7],
  [COLORS.black, 8],
];

function Rollwheel() {
  const [numberLayout, setNumberLayout] = useState(INITIAL_LAYOUT);
  const [isRolling, setIsRolling] = useState(false);

  function handleClick() {
    setIsRolling(!isRolling);
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>Roll</button>
      <div className="roll-container">
        <div className={`roll-wrapper ${isRolling ? "animate" : ""}`}>
          {numberLayout.map((value) => {
            return (
              <div key={value[1]} style={{ background: value[0] }}>
                {value[1]}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Rollwheel;
