import React from "react";
import { useState } from 'react';
import PropTypes from 'prop-types';
import  "./NewBoardForm.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewBoardForm(props) {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });

  const [show, setShow] = useState(true);

  const isDisabled = (formFields.title === "") || (formFields.owner === "");
  const buttonDisplayBoardForm = show ? "Hide New Board Form" : "Show New Board Form";
  const classFormDisplay = show ? "board-form-visible" : "board-form-hidden"
  const titleInput = (formFields.title === "") ? "error" : "valid";
  const ownerInput = (formFields.owner === "") ? "error" : "valid";


  const onTitleChange = (event) => {
    setFormFields({
        ...formFields,
        title: event.target.value
    })
  };

  const onOwnerChange = (event) => {
    setFormFields({
        ...formFields,
        owner: event.target.value
    })
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

        props.addBoardCallBack({
            title: formFields.title,
            owner: formFields.owner
        });

        setFormFields({
            title: '',
            owner: '',
        });
  };

  const onToggleVisibility = () => {
    setShow(!show);
  };

  return (
    <section>
      <h2>Create a New Board</h2>
      <Form
        aria-label="Create a New Board"
        name="boardForm"
        className={classFormDisplay} 
        onSubmit={onFormSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
              required
              name="title"
              type="title" 
              className={`title-input ` + titleInput}
              value={formFields.title}
              onChange={onTitleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formOwner">
          <Form.Label>Owner</Form.Label>
          <Form.Control
              required
              name="owner"
              type="owner"
              className={`owner-input ` + ownerInput}
              value={formFields.owner}
              onChange={onOwnerChange} />
        </Form.Group>

        <Button variant="dark" disabled={isDisabled} type="submit">
          Submit Query
        </Button>

        <div className="form-preview">Preview: {formFields.title} - {formFields.owner}</div>
      </Form>
      <Button variant="dark" className="form-toggle" onClick={onToggleVisibility}>{buttonDisplayBoardForm}</Button>
    </section>
    
  );
}

NewBoardForm.propTypes = {
  addBoardCallBack: PropTypes.func.isRequired
};

export default NewBoardForm;
