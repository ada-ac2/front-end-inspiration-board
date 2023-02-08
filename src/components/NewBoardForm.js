import React, { useState } from "react";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({ title: "", owner: "" });
  const [toggleBoardForm, setToggleBoardForm] = useState(false);

  const onToggleBoardForm = () => {
    setToggleBoardForm(!toggleBoardForm);
  };

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addBoardCallback({
      title: formFields.title,
      owner: formFields.owner,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <button onClick={onToggleBoardForm}>Create a new Board</button>
      {toggleBoardForm && (
        <div>
          <input
            name="title"
            value={formFields.title}
            onChange={onTitleChange}
            placeholder="Title"
          />

          <input
            name="owner"
            value={formFields.owner}
            onChange={onOwnerChange}
            placeholder="Owner"
          />

          <button type="submit">Add Board</button>
        </div>
      )}
    </form>
  );
};

export default NewBoardForm;
