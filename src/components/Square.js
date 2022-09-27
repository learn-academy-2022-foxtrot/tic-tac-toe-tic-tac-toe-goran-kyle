import React from "react";

const Square = ({ handleClick, square, index }) => {
  const handleOneClick = (e) => {
    if (square === null) {
      handleClick(e.currentTarget.id);
    } else {
      return;
    }
    //     return !square ? handleClick(e.currentTarget.id) : null;
  };

  return (
    <>
      <div onClick={handleOneClick} className="square" id={index}>
        {square}
      </div>
    </>
  );
};
export default Square;
