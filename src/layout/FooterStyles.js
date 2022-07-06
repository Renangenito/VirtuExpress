import styled from "styled-components";

export const DivFooter = styled.div`
    padding: 1.5em;
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8em;
        ul{
            display: flex;
        }
        li{
            list-style-type: none;
            font-size: 1.7em;
            margin: 0 0.5em;
            margin-bottom: 1em;
            color: #efefef;
                &:hover{
                    color: #0075b8;
                    cursor: pointer;
                }
        }
        p{
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
        }
        span{
            color: #069df3;
        }

`