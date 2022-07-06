import styled from "styled-components"
export const DivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
        label{
            font-size: 1.3em;
            font-weight: bold;
        }
        input{
            
            width: 100%;
            height: 3em;
            outline: none;
            margin-bottom: 1em;
            margin-top: .2em;
            border: none;
                &::placeholder{
                    padding-left: .5em;
                }
        }
`
