import React, { useState } from "react";

const NewCardForm = ({ addNewCard }) => {
// use state -> card message
// handle message state
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
        setMessage(event.target.value);
    }
// handle form validation on submit 
    const tooLong = message.length > 40 ? true : false;
    const tooShort = message.length === 0 ? true : false;

    const formSubmit = (event) => {
        event.preventDefault();
        addNewCard(message);
        setMessage("");
    }

    return (
    <section className="new-card">
        <h2>Create a New Card</h2>
            <form onSubmit={formSubmit}>
                <label for="message-input">Message</label>
                <input 
                    type="text" 
                    id="message-input" 
                    maxlength="150"
                    minlength="1"
                    value={message}
                    onChange={handleChange}/>
                    
                <input type="submit" value="Add New Card"/>
            </form>
    </section>
    )

};

export default NewCardForm;