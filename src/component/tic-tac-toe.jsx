import { useState } from 'react';
import useTicTacToe from '../hook/use-tic-tac-toe';
import { v4 as uuidv4 } from 'uuid';
const initialBoard = Array(9).fill(null);

function TICTACTOE() {
  const { board, reset, handleClick, messageStatus } = useTicTacToe();
  // console.log(document.getElementsByClassName('cell'));
  return (
    <div className="game">
      <div className="header">
        {messageStatus()}
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="board">
        {board?.map((d, index) => {
          return (
            <button
              className="cell"
              key={uuidv4()}
              onClick={() => handleClick(index)}
              disabled={d !== null}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TICTACTOE;
