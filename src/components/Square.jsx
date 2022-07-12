import React from 'react'

function Square({value , onclick , isWinningSquare}) {
  return (
    <button type='button' className={`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`} onClick={onclick}>{value}</button>
  )
}

export default Square
