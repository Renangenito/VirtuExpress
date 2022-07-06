import React from 'react';
import { DivInput } from './InputStyles'
function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <DivInput>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            required
            />
        </DivInput>
    )
}

export default Input;