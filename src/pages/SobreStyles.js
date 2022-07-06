import styled from "styled-components";

export const DivSobre = styled.div`
    margin: 6em 0 16em 5em;
    padding-bottom: 8em;
        h1{
            color: #002F52;
            padding: 1em;
            margin: .6em;
        }
        ul{
            margin: 2em;
        }
        li{
            margin: 2em;
            list-style: none;
               
        }
        p{
            color: #002F52;
            font-size: 1.2em;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                &:before{
                    content: "✩"
                }
        }
`
