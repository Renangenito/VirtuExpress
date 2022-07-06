import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ButtonStyles';
function LinkButton({to, text}){
    return(
        <Link to={to}>
            <Button>{text}</Button>
        </Link>
    )
}
export default LinkButton;