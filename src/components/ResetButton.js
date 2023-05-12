import React from 'react'

import "./ResetButton.css"


const ResetButton = ({resetBoard}) => {
  return (
    <button className="resetButton" onClick={resetBoard}>New<span>-game</span></button>
  )
}

export default ResetButton
