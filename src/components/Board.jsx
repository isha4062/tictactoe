import React from 'react';
import Square from './Square';

function Board({board , handleBoardState}) {
  const renderBoard = position => {
    return (
      <Square
        value={board[position]}
        onclick={() => {
          handleBoardState(position);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderBoard(0)}
        {renderBoard(1)}
        {renderBoard(2)}
      </div>
      <div className="board-row">
        {renderBoard(3)}
        {renderBoard(4)}
        {renderBoard(5)}
      </div>
      <div className="board-row">
        {renderBoard(6)}
        {renderBoard(7)}
        {renderBoard(8)}
      </div>
    </div>
  );
}

export default Board;
