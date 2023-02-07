import React, { useState } from "react";

const NewCardForm = ({ currentBoard }) => {
  const [feildsData, setFeildsData] = useState({
    message: "",
  });

  const onMessageChange = (event) => {
    setFeildsData({
      ...feildsData,
      message: event.target.value,
    });
  };

  return (
    <form>
      <h4>Create a new card</h4>
      <div>
        <lable htmlFor="message">Message</lable>
        <input
          name="message"
          value={feildsData.message}
          onChange={onMessageChange}
          placeholder="Message"
        />
      </div>
      <button type="submit">Add new message!</button>
    </form>
  );
};

export default NewCardForm;
