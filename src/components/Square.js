import React, {useState} from 'react'

const Square = ({handleClick}) => {




const handleOneClick = (e) => {



handleClick(e.currentTarget.id)

}



return (
   <div id="game">
  
            <div onClick={handleOneClick} className="square" id="0">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="1">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="2">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="3">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="4">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="5">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="6">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="7">{symbol}</div>
            <div onClick={handleOneClick} className="square" id="8">{symbol}</div>
      </div>
)
  
}
export default Square