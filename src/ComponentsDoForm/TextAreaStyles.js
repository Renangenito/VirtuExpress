import styled from "styled-components"
export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
        label{
            font-size: 1.3em;
            font-weight: bold;
        }
        textarea{
            width: 100%;
            height: 6em;
            outline: none;
            margin-bottom: 1em;
            margin-top: .2em;
            border: none;
            &::placeholder{
                padding: .8em .5em;
            }
        }
`

