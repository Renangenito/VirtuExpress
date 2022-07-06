import React from 'react';
import { Button } from './ButtonStyles';
function ButtonLayout({text, click}){
    return(
      
            <Button onClick={click} >{text}</Button>
      
    )
}
export default ButtonLayout;