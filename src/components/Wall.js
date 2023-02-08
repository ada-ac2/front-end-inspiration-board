// To Do:
// Iterate through the board list
//For every element in the list, render <Board>
import React from "react";
import CardList from "./CardList";

const Wall = ({ currentBoard, cardsData }) => {
  const title = currentBoard.board_id ? currentBoard.title : "";
  const owner = currentBoard.board_id ? currentBoard.owner : "";
  return (
    <div>
      <h2>{title}</h2>
      <p>{owner}</p>

      <CardList board={currentBoard} cardsData={cardsData}></CardList>
    </div>
  );
};

export default Wall;
