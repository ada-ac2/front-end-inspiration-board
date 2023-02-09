import React, { useState } from "react";

const NewBoardForm = (props) => {
    const [formFields, setFormFields] = useState(
        {title: '',
        owner: ''}
    ); 
    const [toggleBoardForm, setToggleBoardForm] = useState(false); 
    
    const onToggleBoardForm = () => {
        setToggleBoardForm(!toggleBoardForm)
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

    return(
        <form onSubmit={onFormSubmit}>
            <button onClick={onToggleBoardForm}>Create a new Board</button>
            {toggleBoardForm && (
                <div>
                    <section> 
                    <label htmlFor="title">Title: </label>
                    <input name = "title" 
                            value = {formFields.title}
                            onChange = {onTitleChange}/>
                    </section>
                <section> 
                    <label htmlFor="owner">Owner: </label>
                    <input name = "owner" 
                            value = {formFields.owner}
                            onChange = {onOwnerChange}/>
                </section> 
                    <input type = "submit" value = "Add board"/>
                </div>
            )}
        </form>
    ); 
}; 

export default NewBoardForm;
