import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [xTurn, setXTurn] = useState(true)
  const [yTurn, setYTurn] = useState(false)
  const [winner, setWinner] = useState([['0', '1', '2'],
  ['3', '4', '5'],['6', '7', '8'], ['0', '3', '6'],
  ['1', '4', '7'],['2', '5', '8'], ['0', '4', '8'],
  ['2', '4', '6']])

  // for (let i = 0; i < 3; i++) {
  //   const [a, b ,c] = winner[i];
  //   if (squares && squares[a] === squares[b] && squares[a] === squares[c]) {
  //     return squares[a];
  // }

  const [xNumbers, setXNumbers] = useState([])
  const [yNumbers, setYNumbers] = useState([])

const handleClick = (e) => {
  console.log("you clicked me", e)
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} handleClick={handleClick}/>
    </>
  )
}

export default App