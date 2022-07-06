import React from 'react';
import { ButtonForm } from './ButtonStyles'
function Button({text, handleClick}){
    return(
        <div>
            <ButtonForm onClick={handleClick} type='submit' >{text}</ButtonForm>
        </div>
    )
}
export default Button;