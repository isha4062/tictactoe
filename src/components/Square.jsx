import React from 'react'

function Square({value , onclick}) {
  return (
    <button type='button' className='square' onClick={onclick}>{value}</button>
  )
}

export default Square
