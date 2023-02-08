import React from "react";
import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ board, selectBoard }) => {
  return (
    <div
      onClick={() => {
        selectBoard(board);
      }}>
      {board.title}
    </div>
  );
};

export default Board;
