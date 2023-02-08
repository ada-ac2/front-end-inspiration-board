import React, {useState} from "react";

const NewBoardForm = (props) => {
    const [formFields, setFormFields] = useState(
        {title: '',
        owner: ''}
    ); 

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
    }

    const onFormSubmit = (event) => {
        event.preventDefault(); 
        props.addBoardCallback(
            {
                title: formFields.title,
                owner: formFields.owner 
            });
    }; 

    return(
        <form onSubmit={onFormSubmit}>
            <h4>Create a new board</h4> 
            <div>
                <label htmlFor="title">Title: </label>
                <input name = "title" 
                        value = {formFields.title}
                        onChange = {onTitleChange}/>
            </div>
            <div>
                <label htmlFor="owner">Owner: </label>
                <input name = "owner" 
                        value = {formFields.owner}
                        onChange = {onOwnerChange}/>
            </div>
            <input type = "submit"
                value = "Add board"
            />
        </form>
    ); 
}; 

export default NewBoardForm; 