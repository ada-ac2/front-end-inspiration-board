import React from "react";
import "./Board.css";

const Board = ({ board, selectBoard }) => {
  return (
    <div
      onClick={() => {
        selectBoard(board);
      }}
    >
      {board.title}
    </div>
  );
};

export default Board;
