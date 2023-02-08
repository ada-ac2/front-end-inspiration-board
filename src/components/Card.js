//For every element in the list, render <Board>
import React from "react";

const Card = ({ key, id, message, likes_count, deleteCard, card }) => {
  // here you want to make a "onAdd" function or some sort
  // since we need to pass the entire object to our backend to update.
  // I took a few lines out of my code but here is an example. you can set
  //board id as a var from the card.board_id use the message and likes count as is
  //const newCardSubmit = (event) => {
  // postNewCard(board_id, { message, likes_count, board_id });}
  //pass the function for an onclick event call :)

  return (
    <div>
      <h4>{message}</h4>
      <p>Likes: {likes_count}</p>
      <h2>+</h2>
      <button onClick={() => deleteCard(card, id)}>Delete</button>
    </div>
  );
};

export default Card;
