import React, { useState } from "react";

const NewCardForm = ({ board_id, postNewCard }) => {
  const [message, setMessage] = useState("");
  const [toggleCardForm, setToggleCardForm] = useState(false);
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const likes_count = 0;
  const handleToggleClick = () => {
    setToggleCardForm(!toggleCardForm);
  };
  const newCardSubmit = (event) => {
    event.preventDefault();
    postNewCard(board_id, { message, likes_count, board_id });
    setMessage("");
  };

  return (
    <form onSubmit={newCardSubmit}>
      <button onClick={handleToggleClick}>Create a new card</button>
      {toggleCardForm && (
        <div>
          <input
            name="message"
            value={message}
            onChange={onMessageChange}
            placeholder="Message"
          />

          <section>
            <button type="submit">Add new message!</button>
          </section>
        </div>
      )}
    </form>
  );
};

export default NewCardForm;
