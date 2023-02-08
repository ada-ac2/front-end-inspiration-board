import React, { useState } from "react";

const NewCardForm = ({ board_id, postNewCard }) => {
  const [message, setMessage] = useState("");

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const likes_count = 0;

  const newCardSubmit = (event) => {
    event.preventDefault();
    postNewCard(board_id, { message, likes_count, board_id });
    setMessage("");
  };

  return (
    <form onSubmit={newCardSubmit}>
      <h4>Create a new card</h4>
      <div>
        <lable htmlFor="message">Message</lable>
        <input
          name="message"
          value={message}
          onChange={onMessageChange}
          placeholder="Message"
        />
      </div>
      <button type="submit">Add new message!</button>
    </form>
  );
};

export default NewCardForm;
