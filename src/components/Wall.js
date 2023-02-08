// To Do:
// Iterate through the board list
//For every element in the list, render <Board>
import React from "react";
import CardList from "./CardList";

const Wall = ({
  currentBoard,
  cardsData,
  setCardsData,
  deleteCurrentBoard,
}) => {
  const title = currentBoard.board_id ? currentBoard.title : "";
  const owner = currentBoard.board_id ? currentBoard.owner : "";
  return (
    <div>
      <div class="inline">
        <h2>{title} - </h2>
        <p> {owner}</p>
      </div>
      <CardList cardsData={cardsData} setCardsData={setCardsData}></CardList>
      <button
        class="bottombutton"
        onClick={() => deleteCurrentBoard(currentBoard)}
      >
        Delete
      </button>
    </div>
  );
};

export default Wall;
