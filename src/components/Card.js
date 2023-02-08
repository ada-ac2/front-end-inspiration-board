//For every element in the list, render <Board>
import React from "react";

const Card = ({
  id,
  message,
  likes_count,
  deleteCard,
  updateLikes,
  card,
  setClass,
}) => {
  // here you want to make a "onAdd" function or some sort
  // since we need to pass the entire object to our backend to update.
  // I took a few lines out of my code but here is an example. you can set
  //board id as a var from the card.board_id use the message and likes count as is
  //const newCardSubmit = (event) => {
  // postNewCard(board_id, { message, likes_count, board_id });}
  //pass the function for an onclick event call :)
  const divClass = setClass(id);
  return (
    <div key={id} class={divClass}>
      <h4 class="message">{message}</h4>
      <div class="cardBar">
        <p>Likes: {likes_count}</p>
        <h2 onClick={() => updateLikes(card, id)}>+</h2>
        <button onClick={() => deleteCard(card, id)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
