import React from 'react'

const Square = ({handleClick}) => {

const handleOneClick = (e) => {
// console.log()
handleClick(e.currentTarget.id)
}

  return (
    <div id="game">
            <div onClick={handleOneClick} className="square" id="0"></div>
            <div onClick={handleOneClick} className="square" id="1"></div>
            <div onClick={handleOneClick} className="square" id="2"></div>
            <div onClick={handleOneClick} className="square" id="3"></div>
            <div onClick={handleOneClick} className="square" id="4"></div>
            <div onClick={handleOneClick} className="square" id="5"></div>
            <div onClick={handleOneClick} className="square" id="6"></div>
            <div onClick={handleOneClick} className="square" id="7"></div>
            <div onClick={handleOneClick} className="square" id="8"></div>

        </div>
  )
}
export default Square
