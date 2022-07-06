import React from 'react';
import { Div } from './TextAreaStyles'
function TextArea({type, text, name, placeholder, handleOnChange, value}){
    return(
        <Div>
            <label htmlFor={name}>{text}</label>
           <textarea
           type={type}
           name={name}
           id={name}
           placeholder={placeholder}
           onChange={handleOnChange}
           value={value}
           required
           />
        </Div>
    )
}

export default TextArea;