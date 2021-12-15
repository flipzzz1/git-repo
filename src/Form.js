import React from 'react';
import { useState } from "react";

const Form = ({onAddMessage}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setValue("");
        onAddMessage({text: value, author: "Human"});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
        </form>
    )
}
export default Form;