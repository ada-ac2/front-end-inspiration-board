// To Do:
// Iterate through the board list
//For every element in the list, render <Board>
import React from "react";
import PropTypes from "prop-types";
import CardList from "./CardList";

const Wall = ({ currentBoard }) => {
  const title = currentBoard.board_id ? currentBoard.title : "";
  const owner = currentBoard.board_id ? currentBoard.owner : "";
  return (
    <div>
      <h2>{title}</h2>
      <p>{owner}</p>

      <CardList board={currentBoard}></CardList>
    </div>
  );
};

export default Wall;
