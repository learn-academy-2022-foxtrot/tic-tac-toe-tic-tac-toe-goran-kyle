import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  const [xTurn, setXTurn] = useState(true);
  // const [winner, setWinner] = useState([
  //   ["0", "1", "2"],
  //   ["3", "4", "5"],
  //   ["6", "7", "8"],
  //   ["0", "3", "6"],
  //   ["1", "4", "7"],
  //   ["2", "5", "8"],
  //   ["0", "4", "8"],
  //   ["2", "4", "6"],
  // ]);
  const winnerSeq = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
  ]
  }
  const finalWinnerSeq = () => {
    for (let i =0; i < winnerSeq.length; i + 1) {
      const [a, b, c] = winnerSeq[i]
      if(handleClick == winnerSeq) {
        console.log("I am True")
      }
    }}


  const [xNumbers, setXNumbers] = useState([]);
  const [yNumbers, setYNumbers] = useState([]);

  const handleClick = (e) => {
    let newSquaresArray = [...squares];
    if (xTurn) {
      setXTurn(false);
      newSquaresArray[e] = "X";
    } else {
      setXTurn(true);
      newSquaresArray[e] = "O";
    }
    setSquares(newSquaresArray);
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setXTurn(true);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game">
        {squares.map((element, i) => {
          return (
            <Square
              square={element}
              handleClick={handleClick}
              key={i}
              index={i}
            />
          );
        })}
      </div>
      <div className="reset">
        <button onClick={reset}>Reset Game</button>
      </div>
    </>
  );
};

export default App;
