import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import Message from './components/Message';
import { calculateWinner } from './components/helper';

import './style/root.scss';

function App() {
  const NewGame = [{ board: Array(9).fill(null), isXNext: true }];
  const [history, setHistory] = useState(NewGame);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const {winner , winningSquares} = calculateWinner(current.board);

  const handleBoardState = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  }

  const newGame = () =>{
    setHistory(NewGame);
    setCurrentMove(0);
  }

  return (
    <div className="app">
      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
      <Message winner={winner} current={current}/>
      <Board board={current.board} handleBoardState={handleBoardState} winningSquares={winningSquares} />
      <button type='button' onClick={newGame} className={`btn-reset ${winner ? 'actie' : ''}`}>Start New Game</button>
      <h2 style={{fontWeight: 'bold'}}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className="bg-balls" />
    </div>
  );
}

export default App;
