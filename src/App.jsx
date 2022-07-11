import React , {useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helper";
import "./style/root.scss";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext , setIsNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : `Next player is ${isNext ? 'X' : 'O'}`;

  const handleBoardState = (position) => {
    if(board[position] || winner){
      return;
    }
    setBoard((prev) => {
      return prev.map((square , pos) => {
        if(pos === position){
          return isNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsNext((prev) => !prev);
  }
  return(
  <div className="app">
  <h1>Tic Tac Toe</h1>
  <h5>{message}</h5>
  <Board board={board} handleBoardState={handleBoardState}/>
  </div>
  )
}

export default App;
