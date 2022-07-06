import styled from "styled-components"
export const Div = styled.div`
    padding: 2.2em;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h1{
            font-size: 2.5em;
            color: #FFF;
            margin: auto 0;
        }
        span{
            color: #ffffff;
            padding: 0 0.2em;
            background-color: #0075b8;
        }
        ul{
            display: flex;
            list-style-type: none;
            align-items: center;
        }
        li{
            font-size: 18px;
            font-weight: bold;
            margin-right: 1em;
        }

        a{
            text-decoration: none;
            color: #fefefe;
            padding: .1em;
            
                &:hover{
                    color: #ffffff;
                    background-color: #0075b8;
                }
        }

`
