import styled from "styled-components";
export const DivLogin = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 2em 0;
        margin: 5em 0 19em 0;
    form{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 3px solid #CCC;
        border-radius: 1em;
        padding: 2em 1em;

    }
    h2{
        margin-bottom: 1em;
    }
    input{
        width: 100%;
        height: 3em;
        margin: .5em 0;
        border: 1px solid #CCC;
        outline: none;
        border-radius: .4em;
        &::placeholder{
            padding-left: 1em;
        }
    }
    button{
        width: 100%;
        height: 3em;
        margin: .8em 0 0 0;
        border-radius: 2em;
        background-color: #098bd5;
        border: none;
        font-weight: bold;
        color: #FFFFFF;
        &:hover{
            background-color: #0075b8;
            cursor: pointer;
        }
    }
`